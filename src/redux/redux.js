import { createStore } from "redux";

const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy:
    typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

// This watching for changes to the state
const unsubcribe = store.subscribe(() => {
  console.log(store.getState());
});

// This is how you unsubscribe from the changes to the store
// unsubcribe()

store.dispatch(incrementCount({}));

//Actions
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
});

store.dispatch({
  type: "RESET",
});
