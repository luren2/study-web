import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  handleSelectAll = (e) => {
    this.props.selectAllItem(e.target.checked);
  };

  handleClearAll = () => {
    if (window.confirm('确定删除吗?')) {
      this.props.clearFinishedItem();
    }
  };

  render() {
    const { list } = this.props;
    let dones = 0,
      all = list.length;
    list.forEach((item) => (dones = item.done ? dones + 1 : dones));
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={dones === all && all}
            onChange={(e) => this.handleSelectAll(e)}
          />
        </label>
        <span>
          <span>已完成{dones}</span> / 全部{all}
        </span>
        <button
          onClick={() => this.handleClearAll()}
          className="btn btn-danger"
        >
          清除已完成任务
        </button>
      </div>
    );
  }
}
