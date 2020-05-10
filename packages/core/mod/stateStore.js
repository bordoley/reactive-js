import { pipe } from "./functions.js";
import { onNotify, using, zipWithLatestFrom, } from "./observable.js";
import { createActionReducer, createStreamable, } from "./streamable.js";
import { ignoreElements } from "./internal/observable/ignoreElements.js";
import { merge } from "./internal/observable/merge.js";
import { onSubscribe } from "./internal/observable/onSubscribe.js";
const stateStoreReducer = (state, action) => action(state);
export const createStateStore = (initialState, equals) => createActionReducer(stateStoreReducer, initialState, equals);
export const toStateStore = () => {
    const createObservable = (updates) => (stream) => merge(pipe(updates, zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), onNotify(next => stream.dispatch(next)), ignoreElements(), onSubscribe(() => stream)), stream);
    return streamable => createStreamable(updates => using(scheduler => streamable.stream(scheduler), createObservable(updates)));
};
