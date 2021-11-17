import React from "react";
import { connect } from "react-redux";
// import store from "../Redux/store";
import {
  incrementCounter,
  decrementCounter,
  initialCounter,
} from "./../../src/Redux/counter/counterActions";

const Counter = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>Counter App Using REDUX</h2>
      <h1>{props.counter}</h1>
      <button
        onClick={props.incrementCounter}
        style={{
          background: "blue",
          color: "white",
          border: "none",
          fontSize: "25px",
        }}
      >
        ADD
      </button>
      <button
        onClick={props.initialCounter}
        style={{
          background: "green",
          color: "white",
          border: "none",
          fontSize: "25px",
          margin: "10px",
        }}
      >
        RESET
      </button>
      <button
        onClick={props.decrementCounter}
        style={{
          background: "red",
          color: "white",
          border: "none",
          fontSize: "25px",
        }}
      >
        SUB
      </button>
      <p>
        <strong>+</strong> this function is used to increment the number by one
      </p>
      <p>
        <strong>-</strong> this function is used to decrement the number by one
      </p>
      <p>
        <strong>RESET</strong> this function is used to reset the number
      </p>
    </div>
  );
};

//consumption
var mapState = (store) => {
  return {
    counter: store.counter,
  };
};

//manipulate
var actions = {
  incrementCounter,
  decrementCounter,
  initialCounter,
};
// consump  manipulate
export default connect(mapState, actions)(Counter);
//higher order function wo function hote hen jo function accept karte hen or modified form return krte hen.
