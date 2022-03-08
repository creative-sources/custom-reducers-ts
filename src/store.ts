//@ts-check
/**
 * 
 * @param {any} reducer 
 * @returns 
 */
export const myCreateStore = (reducer: { (state: number | undefined, action: { type: any; }): number; (arg0: any, arg1: any): any; }) => {
  /**
   * @type {any}
   */
  let state: any;
  /**
   * @type {any[]}
   */
  let listeners: { forEach?: any; push?: any; filter?: any; } = [];

  const getState = () => state;

  const dispatch = (/** @type {{}} */ action: {}) => {
    state = reducer(state, action);
    listeners.forEach((listener: () => any) => listener());
  };

  const subscribe = (/** @type {any} */ listener: any) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l: any) => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

export const combineReducer = (/** @type {object} */ reducers: { [x: string]: (arg0: any, arg1: any) => any; }) => {
  return (state = {}, /** @type {any} */ action: any) => {
    return Object.keys(reducers).reduce((nextState: { [x: string]: any; }, key: string | number) => {
      // @ts-ignore
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};
