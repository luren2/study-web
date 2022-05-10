import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
  state = {
    mouse: false,
  };
  handleMouse = (flag) => {
    this.setState({ mouse: flag });
  };
  handleChange = (id, e) => {
    this.props.updateItem(id, e.target.checked);
  };
  handleDelete = (id) => {
    if (window.confirm('确定删除吗?')) {
      this.props.deleteItem(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li
        style={{ background: this.state.mouse ? '#ddd' : '#fff' }}
        onMouseEnter={() => this.handleMouse(true)}
        onMouseLeave={() => this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => this.handleChange(id, e)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.mouse ? 'block' : 'none' }}
          onClick={() => this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
