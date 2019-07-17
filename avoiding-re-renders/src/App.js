import React, { Component } from 'react';

import List from './components/List';
import ListSCU from './components/ListSCU';
import ListPure from './components/ListPure';
import ListFunctional from './components/ListFunctional';
import AddItemForm from './components/AddItemForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: ['one', 'two', 'three', 'four', 'five'],
      toggler: false,
    };
  }

  handleTogglerOnClick() {
    this.setState(prevState => {
      return {
        toggler: !prevState.toggler,
      };
    });
  }

  handleAddItemSubmit(event) {
    const newItem = event.target.newItem.value;
    event.preventDefault();

    this.setState(prevState => {
      prevState.dataList.push(newItem);
      return { dataList: prevState.dataList };
    });

    event.target.newItem.value = '';
  }

  render() {
    console.log('rendering App');
    const { toggler, dataList } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Performance Demo</h2>
        </div>
        <main>
          <p className="toggler">Pointless state: {toggler.toString()}</p>
          <input
            type="button"
            onClick={this.handleTogglerOnClick.bind(this)}
            value="Toggle Pointless State"
          />
          <AddItemForm handleSubmit={this.handleAddItemSubmit.bind(this)} />
          <div className="listsWrapper">
            <List items={dataList} />
            {/* <ListSCU items={dataList} /> */}
            {/* <ListPure items={dataList} /> */}
            {/* <ListFunctional items={dataList} /> */}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
