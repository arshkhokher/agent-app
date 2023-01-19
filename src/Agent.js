import React, { Component } from "react";
const NO_AGENT_MESSAGE =
  "Currently, there are no agents available, please send your queries on abc@email.com";
class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Guest",
      officeStatus: false,
      message: "",
      query: ""
    };
  }

  componentDidMount() {
    this.checkWorkingHours();
  }

  checkWorkingHours() {
    const nowTime = new Date();
    const openingTime = new Date(
      nowTime.getFullYear(),
      nowTime.getMonth(),
      nowTime.getDate(),
      8,
      0,
      0,
      0
    );
    const closingTime = new Date(
      nowTime.getFullYear(),
      nowTime.getMonth(),
      nowTime.getDate(),
      17,
      1,
      0,
      0
    );

    if (
      openingTime.getTime() <= nowTime.getTime() &&
      nowTime.getTime() <= closingTime.getTime()
    ) {
      this.setState({ officeStatus: true, message: "" });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.query,
      message: "query has been submitted"
    });
  };
  getQuery() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Query Form</h3>
        <textarea type="text" name="query" placeholder="enter your query" />
        <br></br>
        <input type="submit" value="Send Query" />
      </form>
    );
  }
  render() {
    return (
      <div>
        HI, {this.state.userName}
        <p>we are open from 8:00 AM to 5:00 PM </p>
        <div>
          {this.state.officeStatus ? this.getQuery() : NO_AGENT_MESSAGE}
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default Agent;
