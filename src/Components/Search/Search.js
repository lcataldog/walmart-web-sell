import React from "react";
import axios from "axios";
import Message from "../Message/Message";
import SearchResults from "../SearchResults/SearchResults";
import SearchInput from "../SearchInput/SearchInput";
import Configuration from "../../Config/configurations";
import "../../assets/css/main.css";
import "../../assets/css/wmt.css";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
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
        console.log("LALO");

        const resultNotFoundMsg =
          res.data === null || res.data === "" ? "Product not available" : "";

        this.setState({
          results: res.data,
          message: resultNotFoundMsg,
          loading: false,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log("LALO3");
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data. Please check network",
          });
        }
      });
    console.log("LALO 5");
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
      this.setState({ query, loading: true, message: "" }, () => {
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
            <div className="logo">
              <a href="/catalogo">
                <img
                  src="/assets/img/cyber-lider-logo.svg"
                  style={{
                    width: "152px",
                    height: "50px",
                    marginTop: "8px",
                    marginLeft: "10px",
                    paddingTop: "6px",
                    marginBottom: "6px",
                  }}
                />
              </a>
            </div>
            <div style={{ width: "100%", margin: "0px 3%" }}>
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
