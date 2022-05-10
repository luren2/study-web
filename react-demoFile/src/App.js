import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    list: [
      {
        id: '001',
        name: '化妆',
        done: false,
      },
      {
        id: '002',
        name: '吃饭',
        done: false,
      },
      {
        id: '003',
        name: '睡觉',
        done: false,
      },
      {
        id: '004',
        name: '逛街',
        done: false,
      },
    ],
  };

  componentDidMount() {
    let newList = JSON.parse(localStorage.getItem('todos'));
    if (newList) {
      this.setState({ list: newList });
    }
  }

  addItem = (item) => {
    const { list } = this.state;
    const newList = [...list, item];
    this.setState({ list: newList });
    localStorage.setItem('todos', JSON.stringify(newList));
  };

  updateItem = (id, done) => {
    const { list } = this.state;
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, done: done };
      } else return item;
    });
    this.setState({ list: newList });
    localStorage.setItem('todos', JSON.stringify(newList));
  };

  deleteItem = (id) => {
    console.log('hhh');
    const { list } = this.state;
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    this.setState({ list: newList });
    localStorage.setItem('todos', JSON.stringify(newList));
  };

  selectAllItem = (flag) => {
    const { list } = this.state;
    const newList = list.map((item) => {
      return { ...item, done: flag };
    });
    this.setState({ list: newList });
    localStorage.setItem('todos', JSON.stringify(newList));
  };

  clearFinishedItem = () => {
    const { list } = this.state;
    const newList = list.filter((item) => {
      return !item.done;
    });
    this.setState({ list: newList });
    localStorage.setItem('todos', JSON.stringify(newList));
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header {...this.state} addItem={this.addItem} />
          <List
            {...this.state}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}
          />
          <Footer
            {...this.state}
            selectAllItem={this.selectAllItem}
            clearFinishedItem={this.clearFinishedItem}
          />
        </div>
      </div>
    );
  }
}
