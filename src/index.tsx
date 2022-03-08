import React, { Component } from "react";
import { render } from "react-dom";
import { Action, myCreateStore, State } from "./store";
import { counter } from "./reducer";
import { todos, Todo } from "./reducer_Todo";

const store = myCreateStore<any, Action>(counter);


interface IProps {
  count: number;
  todos: Todo[]
}

// This Happens within a file
const TodoStore = myCreateStore<Todo[], Todo>(todos)

// This happens with in the store or another component
TodoStore.dispatch({ index: 1, text: "say hello", complete: false, type: "ADD_TODO" })


class App extends Component<IProps, {}> {
  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              store.dispatch({
                type: "INCREMENT",
              });
            }}
          >
            Increse
          </button>
        </div>
        <div>
          {JSON.stringify(this.props.todos)}
        </div>
        {this.props.count}
      </div>
    );
  }
}
const renderApp = () => {
  render(<App count={store.getState()} todos={TodoStore.getState()}></App>, document.getElementById("root"));
};

store.subscribe(renderApp);
renderApp();
