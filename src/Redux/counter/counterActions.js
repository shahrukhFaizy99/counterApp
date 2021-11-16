export var incrementCounter = (dispatch) => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export var decrementCounter = (dispatch) => {
  return {
    type: "DECREMENT_COUNTER",
  };
};

export var initialCounter = (dispatch) => {
  return {
    type: "INITIAL_COUNTER",
  };
};
