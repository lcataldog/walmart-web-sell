import React from "react";
import axios from "axios";
import Message from "../Message/Message";
import SearchResults from "../SearchResults/SearchResults";
import SearchInput from "../SearchInput/SearchInput";
import Configuration from "../../Config/configurations";
import Logo from "../Logo/Logo";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      message: "",
    };

    this.cancel = "";
  }

  /**
   * Fetch the search results and update the state with the result.
   * Also cancels the previous query before making the new one.
   *
   * @param {String} query Search Query.
   *
   */
  fetchSearchResults = (query) => {
    const searchUrl = Configuration.API_URL + query;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        const resultNotFoundMsg =
          res.data === null || res.data === ""
            ? "Producto No disponible"
            : "Se encontraron " + res.data.length + " resultado para " + query;
        this.setState({
          results: res.data,
          message: resultNotFoundMsg,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            message: "",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
        message: "",
      });
    } else {
      this.setState({ query, message: "" }, () => {
        this.fetchSearchResults(query);
      });
    }
  };

  renderSearchResults = () => {
    const { results } = this.state;
    if (Object.keys(results).length && results.length) {
      return <SearchResults results={results} />;
    }
  };

  render() {
    let { query, message } = this.state;
    return (
      <div>
        <div
          className="site-header compact"
          style={{ backgroundColor: "rgb(4,30,66)" }}
        >
          <div className="header-wrapper">
            <Logo />
            <div style={{ width: "95%", margin: "0px 3%" }}>
              <div className="search-width">
                <SearchInput
                  query={query}
                  handleOnInputChange={this.handleOnInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Message message={message} />

          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default Search;
