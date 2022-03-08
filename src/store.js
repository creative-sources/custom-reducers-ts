//@ts-check
/**
 * 
 * @param {any} reducer 
 * @returns 
 */
export const myCreateStore = (reducer) => {
  /**
   * @type {any}
   */
  let state;
  /**
   * @type {any[]}
   */
  let listeners = [];

  const getState = () => state;

  const dispatch = (/** @type {{}} */ action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (/** @type {any} */ listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

export const combineReducer = (/** @type {object} */ reducers) => {
  return (state = {}, /** @type {any} */ action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      // @ts-ignore
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};
