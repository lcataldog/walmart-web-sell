import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-bootstrap-modal";
import "./LoaderModal.less";

class LoaderModal extends React.PureComponent {
  render() {
    const { visualMessage, open } = this.props;

    return (
      <ReactModal
        id="lm"
        show={open}
        role="alert"
        aria-live="polite"
        aria-relevant="all"
        aria-atomic="true"
      >
        <ReactModal.Body id="lmb">
          <div className="loader">
            <div className="circle-container">
              <svg className="circle" viewBox="25 25 50 50">
                <circle
                  className="path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="loaderMessage">{visualMessage}</p>
          </div>
        </ReactModal.Body>
      </ReactModal>
    );
  }
}

LoaderModal.propTypes = {
  visualMessage: PropTypes.node,
  open: PropTypes.bool,
};

LoaderModal.defaultProps = {
  visualMessage: "Cargando",
  open: true,
};

export default LoaderModal;
