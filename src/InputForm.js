import React from "react";

class TitleInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.name, e.target.value);
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
    this.props.onChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>持っている最新巻</dt>
        <dd>
          <input
            type="number"
            name="number"
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
    this.props.onChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>発売済み</dt>
        <dd>
          <input
            type="number"
            name="latest"
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

  handleChange(e) {
    this.props.onChange(e.target.name, e.target.checked);
  }

  render() {
    return (
      <dl>
        <dt>予約</dt>
        <dd>
          <label>
            <input
              type="checkbox"
              name="isPreOrdered"
              onClick={this.handleChange}
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
    this.props.onChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <dl>
        <dt>今後の方針</dt>
        <dd>
          <label>
            <input
              type="radio"
              name="status"
              value="completed"
              checked={this.props.value === "completed"}
              onChange={this.handleChange}
            />
            完結済み
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="keeping"
              checked={this.props.value === "keeping"}
              onChange={this.handleChange}
            />
            買い続ける
          </label>
          <label>
            <input
              type="radio"
              name="status"
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
    this.props.onChange(e.target.name, e.target.value);
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

class InputForm extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(name, val) {
    this.props.onChange(name, val);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        name={this.props.name}
        className={this.props.class}
      >
        <TitleInput
          value={this.props.title}
          onChange={this.handleChange}
        />
        <NumberInput
          value={this.props.number}
          onChange={this.handleChange}
        />
        <LatestInput
          value={this.props.latest}
          onChange={this.handleChange}
        />
        <IsPreOrderedInput
          checked={this.props.isPreOrdered}
          onChange={this.handleChange}
        />
        <StatusInput
          value={this.props.status}
          onChange={this.handleChange}
        />
        <DateInput
          value={this.props.date}
          onChange={this.handleChange}
        />
        <button type="submit" className="input-form__submit">{this.props.button}</button>
      </form>
    );
  }
}

export default InputForm;