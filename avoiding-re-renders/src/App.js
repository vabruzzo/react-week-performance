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

    this.handleTogglerOnClick = this.handleTogglerOnClick.bind(this);
    /**
     * Comment out the below method bind and bind it in the render method to
     * see how that would cause a new function to be made for every render, hence
     * causing unnecessary re-renders in AddItemForm.jsx when the *new* method is
     * passed down.
     */
    this.handleAddItemSubmit = this.handleAddItemSubmit.bind(this);
  }

  /**
   * The only purpose for state.toggler and this method is to change some irrelevant state
   * to demonstrate unnecessary re-renders.
   */
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

    /**
     * Using push here would mutate the dataList array in place. Then, when everything
     * re-renders, shouldComponentUpdate and PureComponent wouldn't re-render because
     * the dataList array would be the same, since it's passed by reference and that's
     * what gets compared. We have to create a *new* array and set our state to that.
     * This is important. Always think IMMUTABILITY.
     */
    this.setState(prevState => {
      /**
       *  Try un-commenting the following and commenting out the immutable way to see how
       * the app breaks. Don't do this.
       */
      // prevState.dataList.push(newItem);
      // return { dataList: prevState.dataList };

      return { dataList: prevState.dataList.concat(newItem) };
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
            onClick={this.handleTogglerOnClick}
            value="Toggle Pointless State"
          />
          <AddItemForm handleSubmit={this.handleAddItemSubmit} />
          <div className="listsWrapper">
            <List items={dataList} />
            <ListSCU items={dataList} />
            <ListPure items={dataList} />
            <ListFunctional items={dataList} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
