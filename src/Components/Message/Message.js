import React from "react";

class Message extends React.PureComponent {
  render() {
    return (
      <div>
        <p className="message">{this.props.message}</p>
      </div>
    );
  }
}

export default Message;
