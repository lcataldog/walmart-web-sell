import React from "react";

class Message extends React.PureComponent {
  render() {
    return (
      <div>
        <span
          style={{
            color: "rgb(0, 0, 0)",
            fontWeight: "bold",
          }}
        >
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default Message;
