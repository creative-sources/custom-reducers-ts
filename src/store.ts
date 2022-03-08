//@ts-check

export type Action = { type: "INCREMENT" | "DECREMENT" }

export type State = number | undefined

type Reducer = <T, A>(state: T | undefined, action: A) => T

/**
 * 
 * @param `Reducer` has an state and action
 * @typeParam `Reducer`
 * @method getState Returns the current state
 * @method dispatch takes an action and changes the current state
 * @method subscribe takes an array of lisetners and provide them with the latest state
 * @returns returns a state, dispatch and subcribe function
 */

export const myCreateStore = <T, A>(reducer: any) => {

  let state: T;

  let listeners: Array<any> = [];

  const getState = () => state;

  const dispatch = (action: A) => {
    state = reducer(state, action);
    listeners.forEach((listener: () => any) => listener());
  };

  const subscribe = (listener: any) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l: any) => l !== listener);
    };
  };

  dispatch({} as A);

  return { getState, dispatch, subscribe };
};

export const combineReducer = (reducers: Reducer[]) => {
  return (state = {}, action: any) => {
    return Object.keys(reducers).reduce((nextState: { [x: string]: any; }, key: string | number) => {
      // @ts-ignore
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};
