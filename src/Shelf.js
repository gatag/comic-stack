import React from "react";
import "./App.css";

class LatestNumber extends React.Component {
  render() {
    const status = this.props.status;
    switch (status) {
      case "completed":
        return false;
      case "keeping":
        return (
          <div className="flex">
            <dt>最新刊</dt>
            <dd>{this.props.latest}巻</dd>
          </div>
        );
      default:
        return false;
    }
  }
}

class NextNumber extends React.Component {
  render() {
    const isPreOrdered = this.props.isPreOrdered ? "予約済み" : "未予約";
    const status = this.props.status;
    switch (status) {
      case "completed":
        return false;
      case "keeping":
        return (
          <div>
            <div className="flex">
              <dt>次の巻の発売日</dt>
              <dd>{this.props.date}</dd>
            </div>
            <div className="flex">
              <dt>次の巻の予約</dt>
              <dd>{isPreOrdered}</dd>
            </div>
          </div>
        );
      default:
        return false;
    }
  }
}

class Status extends React.Component {
  render() {
    const status = (() => {
      switch (this.props.status) {
        case "completed":
          return "完結済み";
        case "keeping":
          return "買い続ける";
        default:
          return "放置";
      }
    })();

    return (
      <div className="flex">
        <dt>この作品は</dt>
        <dd>{status}</dd>
      </div>
    );
  }
}

class Comic extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props);
  }

  render() {
    return (
      <section className="comic" onClick={this.handleClick}>
        <h2>{this.props.title}</h2>
        <h3>{this.props.number}巻まで持ってる！</h3>
        <dl>
          <LatestNumber latest={this.props.latest} status={this.props.status} />
          <NextNumber
            date={this.props.date}
            isPreOrdered={this.props.isPreOrdered}
            status={this.props.status}
          />
          <Status status={this.props.status} />
        </dl>
      </section>
    );
  }
}

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.handleComicClick = this.handleComicClick.bind(this);
  }

  handleComicClick(comicProps) {
    this.props.handleEdit(comicProps);
  }

  render() {
    const books = this.props.books;
    if (books === null) {
      return false;
    }
    const bookItems = books.map(book => (
      <Comic
        title={book.title}
        number={book.number}
        latest={book.latest}
        date={book.date}
        isPreOrdered={book.isPreOrdered}
        status={book.status}
        key={book.key}
        onClick={this.handleComicClick}
      />
    ));
    return <div>{bookItems}</div>;
  }
}

export default Shelf;
