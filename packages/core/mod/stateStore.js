import { pipe, returns } from "./functions.js";
import { merge, map, scan, distinctUntilChanged, onNotify, using, } from "./observable.js";
import { createActionReducer, createStreamable, } from "./streamable.js";
const stateStoreReducer = (state, action) => action(state);
export const createStateStore = (initialState, equals) => createActionReducer(stateStoreReducer, initialState, equals);
export const toStateStore = (initialState, equals) => {
    const createFactory = (observable) => (stream) => pipe(merge(observable, map(returns)(stream)), scan(stateStoreReducer, initialState), distinctUntilChanged(equals), onNotify((next) => stream.dispatch(next)));
    return enumerable => createStreamable(observable => using(scheduler => enumerable.stream(scheduler), createFactory(observable)));
};
