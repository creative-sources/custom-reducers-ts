import React, { Component } from "react";
import { render } from "react-dom";
import { myCreateStore } from "./store.js";
import { counter } from "./reducer.js";

const store = myCreateStore(counter);
interface IProps {
  count: number;
}

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
        {this.props.count}
      </div>
    );
  }
}
const renderApp = () => {
  render(<App count={store.getState()}></App>, document.getElementById("root"));
};

store.subscribe(renderApp);
renderApp();
