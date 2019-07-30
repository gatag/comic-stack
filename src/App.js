import React from "react";
import "./App.css";
import Shelf from "Shelf"

class TitleInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>タイトル</dt>
        <dd>
          <input
            type="text"
            name="title"
            value={this.props.value}
            onChange={this.handleChange}
            className="titleInput"
          />
        </dd>
      </dl>
    );
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>持っている最新巻</dt>
        <dd>
          <input
            type="number"
            value={this.props.value}
            onChange={this.handleChange}
            className="numberInput"
          />
        </dd>
      </dl>
    );
  }
}

class LatestInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>発売済み</dt>
        <dd>
          <input
            type="number"
            value={this.props.value}
            onChange={this.handleChange}
            className="numberInput"
          />
        </dd>
      </dl>
    );
  }
}

class IsPreOrderedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChange();
  }

  render() {
    return (
      <dl>
        <dt>予約</dt>
        <dd>
          <label>
            <input
              type="checkbox"
              checked={this.props.value}
              onChange={this.handleChange}
            />
            予約済み
          </label>
        </dd>
      </dl>
    );
  }
}

class StatusInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>今後の方針</dt>
        <dd>
          <label>
            <input
              type="radio"
              value="completed"
              checked={this.props.value === "completed"}
              onChange={this.handleChange}
            />
            完結済み
          </label>
          <label>
            <input
              type="radio"
              value="keeping"
              checked={this.props.value === "keeping"}
              onChange={this.handleChange}
            />
            買い続ける
          </label>
          <label>
            <input
              type="radio"
              value="leaving"
              checked={this.props.value === "leaving"}
              onChange={this.handleChange}
            />
            放置する
          </label>
        </dd>
      </dl>
    );
  }
}

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>次の巻の発売日</dt>
        <dd>
          <input
            type="date"
            name="date"
            value={this.props.value}
            onChange={this.handleChange}
          />
        </dd>
      </dl>
    );
  }
}

class CreateComic extends React.Component {
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
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleLatestChange = this.handleLatestChange.bind(this);
    this.handleIsPreOrdered = this.handleIsPreOrdered.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(val) {
    this.setState({
      title: val
    });
  }

  handleNumberChange(val) {
    this.setState({
      number: val
    });
  }

  handleLatestChange(val) {
    this.setState({
      latest: val
    });
  }

  handleIsPreOrdered(val) {
    this.setState({
      isPreOrdered: !this.state.isPreOrdered
    });
  }

  handleStatusChange(val) {
    this.setState({
      status: val
    });
  }

  handleDateChange(val) {
    this.setState({
      date: val
    });
  }

  handleSubmit(e) {
    e.preventDefault();
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
      <form onSubmit={this.handleSubmit} name="createComic" className="createComic">
        <TitleInput
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <NumberInput
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <LatestInput
          value={this.state.latest}
          onChange={this.handleLatestChange}
        />
        <IsPreOrderedInput
          value={this.state.isPreOrdered}
          onChange={this.handleIsPreOrdered}
        />
        <StatusInput
          value={this.state.status}
          onChange={this.handleStatusChange}
        />
        <DateInput value={this.state.date} onChange={this.handleDateChange} />
        <button type="submit">本棚に追加する</button>
      </form>
    );
  }
}

class EditComic extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.handleUpdate(this.state)
  }

  render() {
    if (this.props.editting === null){
      return false;
    }else{
      return (
        <form onSubmit={this.handleSubmit} name="editComic" className="createComic">
          <TitleInput
            value={this.props.editting.title}
            onChange={this.handleTitleChange}
          />
          <NumberInput
            value={this.props.editting.number}
            onChange={this.handleNumberChange}
          />
          <LatestInput
            value={this.props.editting.latest}
            onChange={this.handleLatestChange}
          />
          <IsPreOrderedInput
            value={this.props.editting.isPreOrdered}
            onChange={this.handleIsPreOrdered}
          />
          <StatusInput
            value={this.props.editting.status}
            onChange={this.handleStatusChange}
          />
          <DateInput value={this.props.editting.date} onChange={this.handleDateChange} />
          <button type="submit">本棚に追加する</button>
        </form>
      );
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: JSON.parse(localStorage.getItem("books")),
      nextKey: localStorage.getItem("nextKey") ? localStorage.getItem("nextKey") : 0,
      editting: null
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleCreate(bookInfomation) {
    if (this.state.books === null) {
      this.setState(
        {
          books: [bookInfomation],
          nextKey: parseInt(this.state.nextKey) + 1
        },
        () => {
          localStorage.setItem("books", JSON.stringify(this.state.books));
          localStorage.setItem("nextKey", JSON.stringify(this.state.nextKey));
        }
      );
    } else {
      const concatted = this.state.books.concat(bookInfomation);
      const sorted = concatted.sort((comicA, comicB) => {
        return parseInt(comicB.key) - parseInt(comicA.key)
      });
      this.setState(
        {
          books: sorted,
          nextKey: parseInt(this.state.nextKey) + 1
        },
        () => {
          localStorage.setItem("books", JSON.stringify(this.state.books));
          localStorage.setItem("nextKey", JSON.stringify(this.state.nextKey));
        }
      );
    }
  }

  handleEdit(comicProps){
    this.setState({
      editting: comicProps
    });
  }

  render() {
    return (
      <div>
        <CreateComic
          onCreate={this.handleCreate}
          nextKey={this.state.nextKey}
        />
        <EditComic editting={this.state.editting}></EditComic>
        <Shelf books={this.state.books} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
