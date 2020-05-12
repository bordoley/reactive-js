import { addDisposableOrTeardown, add } from "./disposable.js";
import { pipe, identity, referenceEquality, } from "./functions.js";
import { onNotify, using, zipWithLatestFrom, distinctUntilChanged, dispatchTo, subscribe, } from "./observable.js";
import { createActionReducer, createStreamable, stream as streamStreamable, } from "./streamable.js";
const stateStoreReducer = (state, action) => action(state);
export const createStateStore = (initialState, equals) => createActionReducer(stateStoreReducer, initialState, equals);
export const toStateStore = (equality = referenceEquality) => streamable => createStreamable(updates => using(scheduler => {
    const stream = streamStreamable(streamable, scheduler);
    const updatesSubscription = pipe(updates, zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), distinctUntilChanged(equality), onNotify(dispatchTo(stream)), subscribe(scheduler), addDisposableOrTeardown(stream));
    return add(stream, updatesSubscription);
}, identity));
