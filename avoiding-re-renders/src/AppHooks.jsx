import React, { useState, useCallback } from 'react';
import List from './components/List';
import ListSCU from './components/ListSCU';
import ListPure from './components/ListPure';
import ListFunctional from './components/ListFunctional';
import AddItemForm from './components/AddItemForm';
import logo from './logo.svg';
import './App.css';

/**
 * You will sometimes notice App renders twice when inspecting in chrome.
 * This is harmless and is caused by devtools:
 * https://github.com/facebook/react-devtools/issues/1297
 */
const App = () => {
  const [toggler, setToggler] = useState(false);
  const [dataList, setDataList] = useState(['one', 'two', 'three', 'four', 'five']);

  const handleTogglerOnClick = () => {
    setToggler(!toggler);
  };

  /**
   * useCallback achieves something similar to what binding the callback in the
   * constructor does for us in class components. In this case though, a new function
   * will be created if the dependencies change.
   */
  const handleAddItemSubmit = useCallback(
    event => {
      event.preventDefault();
      const newItem = event.target.newItem.value;

      setDataList(dataList.concat(newItem));
      event.target.newItem.value = '';
    },
    [dataList],
  );

  console.log('rendering App');

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
          onClick={handleTogglerOnClick}
          value="Toggle Pointless State"
        />
        <AddItemForm handleSubmit={handleAddItemSubmit} />
        <div className="listsWrapper">
          <List items={dataList} />
          <ListSCU items={dataList} />
          <ListPure items={dataList} />
          <ListFunctional items={dataList} />
        </div>
      </main>
    </div>
  );
};

export default App;
