import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Api from "../api";

class MessageList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
    };
  }
  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message);
    },
  });

  componentDidMount() {
    this.api.start();
  }

  messageCallback(message) {
    const { messages } = this.state;
    this.setState(
      {
        messages: message,
      },
      () => {
        // Included to support initial direction. Please remove upon completion
        this.props.setAllObjects([...this.props.allObjects, messages]);
      }
    );
  }

  renderButton() {
    const isApiStarted = this.api.isStarted();
    return (
      <Button
        variant="contained"
        style={{ backgroundColor: "#00e2c4", minWidth: "100px" }}
        onClick={() => {
          if (isApiStarted) {
            this.api.stop();
          } else {
            this.api.start();
          }
          this.forceUpdate();
        }}
      >
        {isApiStarted ? "Stop" : "Start"}
      </Button>
    );
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

export default MessageList;
