import { pipe, identity } from "./functions.js";
import { subscribe } from "./internal/observable/subscribe.js";
import { onNotify, using, zipWithLatestFrom, dispatchTo } from "./observable.js";
import { createActionReducer, createStreamable, stream as streamStreamable, } from "./streamable.js";
const stateStoreReducer = (state, action) => action(state);
export const createStateStore = (initialState, equals) => createActionReducer(stateStoreReducer, initialState, equals);
export const toStateStore = () => streamable => createStreamable(updates => using(scheduler => {
    const stream = streamStreamable(streamable, scheduler);
    const updatesSubscription = pipe(updates, zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), onNotify(dispatchTo(stream)), subscribe(scheduler)).add(stream);
    return stream.add(updatesSubscription);
}, identity));
