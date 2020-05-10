import { pipe } from "./functions.js";
import { onNotify, ignoreElements, merge, onSubscribe, using, zipWithLatestFrom, } from "./observable.js";
import { createActionReducer, createStreamable, } from "./streamable.js";
const stateStoreReducer = (state, action) => action(state);
export const createStateStore = (initialState, equals) => createActionReducer(stateStoreReducer, initialState, equals);
export const toStateStore = () => {
    const createObservable = (updates) => (stream) => merge(pipe(updates, zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), onNotify(next => stream.dispatch(next)), ignoreElements(), onSubscribe(() => stream)), stream);
    return streamable => createStreamable(updates => using(scheduler => streamable.stream(scheduler), createObservable(updates)));
};
