import React from "react";
import { connect } from "react-redux";

import { decreaseNumber, increaseNumber } from "./redux/counter/actions";
import "./App.css";

function App({ increment, decrement, count }) {
  return (
    <div className="App">
      {console.log(count)}
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapStateToProps = ({ counter }) => {
  return {
    count: counter.count,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increaseNumber()),
  decrement: () => dispatch(decreaseNumber()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
