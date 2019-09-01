import React from "react";
import InputForm from "./InputForm";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, val) {
    this.props.onChange(name, val);
  }
  handleSubmit() {
    this.props.onSubmit();
  }

  render() {
    if (this.props.editting === null) {
      return false;
    } else {
      return (
        <InputForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          title={this.props.editting.title}
          number={this.props.editting.number}
          latest={this.props.editting.latest}
          isPreOrdered={this.props.editting.isPreOrdered}
          status={this.props.editting.status}
          date={this.props.editting.date}
          name="editComic"
          class="createComic"
        ></InputForm>
      );
    }
  }
}

export default Editor;