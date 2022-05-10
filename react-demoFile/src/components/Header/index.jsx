import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {
  handleKeyUp = (e, list) => {
    if (e.key === 'Enter') {
      if (e.target.value.trim() === '') {
        alert('输入不能为空！');
        return;
      }
      let flag = false;
      list.forEach((item) => {
        if (item.name === e.target.value.trim()) {
          alert('输入内容已经存在！');
          flag = true;
          e.target.value = '';
          return;
        }
      });
      if (flag) return;
      const item = { id: nanoid(), name: e.target.value.trim(), done: false };
      this.props.addItem(item);
      e.target.value = '';
    }
  };

  render() {
    const { list } = this.props;

    return (
      <div className="todo-header">
        <input
          onKeyUp={(e) => this.handleKeyUp(e, list)}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
