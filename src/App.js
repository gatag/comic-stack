import React from "react";
import "./App.css";
import Shelf from "./Shelf";
import Creator from "./Creator";
import Editor from "./Editor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
      books: JSON.parse(localStorage.getItem("books")),
      nextKey: localStorage.getItem("nextKey")
        ? localStorage.getItem("nextKey")
        : 0,
      editting: null,
      edittingKey: null
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleComicClick = this.handleComicClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
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
        return parseInt(comicB.key) - parseInt(comicA.key);
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

  handleEdit(name, val) {
    const edittingKey = this.state.edittingKey;
    const books = this.state.books;
    const editting = JSON.parse(JSON.stringify(this.state.editting)); //ディープコピー
    editting[name] = val;
    editting["key"] = edittingKey;
    const alterBooks = books
      .filter(book => book.key !== edittingKey)
      .concat(editting)
      .sort((comicA, comicB) => {
        return parseInt(comicB.key) - parseInt(comicA.key);
      });
    this.setState({
      books: alterBooks,
      editting: editting
    });
  }

  handleComicClick(comicProps, keyId) {
    document.getElementsByTagName('body')[0].classList.toggle('editting');
    this.setState({
      editting: comicProps,
      edittingKey: keyId
    });
  }

  handleUpdate(){
    document.getElementsByTagName('body')[0].classList.toggle('editting');
    this.setState({
      editting: null
    });
  }

  handleButtonClick(){
    const isCreating = this.state.isCreating;
    this.setState({
      isCreating: !isCreating
    });
    const plus = document.getElementById("plus");
    if (!isCreating) {
      plus.classList.add("x");
    } else {
      plus.classList.remove("x");
    }
  }

  render() {
    return (
      <div id="app">
        <button onClick={this.handleButtonClick} id="funcButton"><span id="plus">+</span></button>
        <Creator isCreating={this.state.isCreating} onCreate={this.handleCreate} nextKey={this.state.nextKey} />
        <Editor
          editting={this.state.editting}
          edittingKey={this.state.edittingKey}
          onChange={this.handleEdit}
          onSubmit={this.handleUpdate}
        />
        <Shelf books={this.state.books} onClick={this.handleComicClick} />
      </div>
    );
  }
}

export default App;
