import React from "react";

class SearchInput extends React.PureComponent {
  render() {
    const { query, handleOnInputChange } = this.props;
    return (
      <div
        className="search-box-container-header"
        style={{ paddingTop: "10px" }}
      >
        <section>
          <div className="ais-InstantSearch__root">
            <div className="ais-InstantSearch__root">
              <div className="ais-SearchBox">
                <label className="search-label">
                  <input
                    type="text"
                    name="query"
                    value={query}
                    id="search-input"
                    placeholder="¿Qué estás buscando?"
                    onChange={handleOnInputChange}
                    maxLength="512"
                    className="ais-SearchBox-input"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchInput;
