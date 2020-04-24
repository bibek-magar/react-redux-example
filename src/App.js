import React, { useEffect } from "react";
import { connect } from "react-redux";

import { decreaseNumber, increaseNumber } from "./redux/counter/actions";
import { fetchDataStart } from "./redux/COVID/actions";
import "./App.css";

function App({ increment, decrement, count, fetchDataStart, covid }) {
  useEffect(() => {
    fetchDataStart();
  }, [fetchDataStart]);
  return (
    <div className="App">
      {console.log(count)}
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>

      <h1>COVID</h1>
      <table>
        <th>County</th>
        <th>State</th>
        <th>Site</th>
        <th></th>
        {covid
          ? covid.map((singleCovid) => (
              <tr>
                <td>{singleCovid.county}</td>
                <td>{singleCovid.state}</td>
                <td>{singleCovid.covid19Site}</td>
              </tr>
            ))
          : null}
      </table>
    </div>
  );
}

const mapStateToProps = ({ counter, covid }) => {
  return {
    count: counter.count,
    covid: covid.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increaseNumber()),
  decrement: () => dispatch(decreaseNumber()),
  fetchDataStart: () => dispatch(fetchDataStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
