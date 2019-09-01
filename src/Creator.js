import React from "react";
import InputForm from "./InputForm";

class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      number: "",
      latest: "",
      isPreOrdered: false,
      status: "",
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, val) {
    this.setState({
      [name]: val
    });
  }

  handleSubmit() {
    let book = this.state;
    book.key = this.props.nextKey;
    this.props.onCreate(book);
    this.setState({
      title: "",
      number: "",
      latest: "",
      isPreOrdered: false,
      status: "",
      date: ""
    });
  }

  render() {
    return (
      <InputForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        title={this.state.title}
        number={this.state.number}
        latest={this.state.latest}
        isPreOrdered={this.state.isPreOrdered}
        status={this.state.status}
        date={this.state.date}
        class="createComic"
        name="creator"
      />
    );
  }
}

export default Creator;