import { pipe, identity } from "./functions.js";
import { onNotify, using, zipWithLatestFrom, dispatchTo } from "./observable.js";
import { createActionReducer, createStreamable, } from "./streamable.js";
import { subscribe } from "./internal/observable/subscribe.js";
const stateStoreReducer = (state, action) => action(state);
export const createStateStore = (initialState, equals) => createActionReducer(stateStoreReducer, initialState, equals);
export const toStateStore = () => streamable => createStreamable(updates => using(scheduler => {
    const stream = streamable.stream(scheduler);
    const updatesSubscription = pipe(updates, zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), onNotify(dispatchTo(stream)), subscribe(scheduler)).add(stream);
    return stream.add(updatesSubscription);
}, identity));
