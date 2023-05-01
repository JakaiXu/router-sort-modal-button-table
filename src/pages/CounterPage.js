import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";
const INCREMENT_COUNT = "increment_count";
const DECREMENT_COUNT = "decrement_count";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const CLICK_TO_ADD = "click_to_add";
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT_COUNT:
      // return { ...state, count: state.count + 1 };
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      // return { ...state, count: state.count - 1 };
      state.count = state.count - 1;
      return;
    case CHANGE_VALUE_TO_ADD:
      // return { ...state, valueToAdd: action.payload };
      state.valueToAdd = action.payload;
      return;
    case CLICK_TO_ADD:
      // return {
      //   ...state,
      //   valueToAdd: 0,
      //   count: state.count + state.valueToAdd,
      // };
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      // return state;
      return;
  }
};
const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };
  const inputHandler = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({ type: CHANGE_VALUE_TO_ADD, payload: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: CLICK_TO_ADD,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex  flex -row items-center">
        {" "}
        <Button onClick={increment} className="mr-4">
          Increment
        </Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={submitHandler}>
        <label>Add a lot</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border-gray-300 border"
          onChange={inputHandler}
          value={state.valueToAdd || ""}
        />
        <Button primary>Add it!!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
