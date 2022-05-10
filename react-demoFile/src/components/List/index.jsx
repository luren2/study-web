import React, { Component } from 'react';
import './index.css';
import Item from '../Item';

export default class List extends Component {
  render() {
    const { list, updateItem, deleteItem } = this.props;
    return (
      <ul className="todo-main">
        {list.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    );
  }
}
