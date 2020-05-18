import { bindDisposables } from "./disposable.js";
import { pipe, identity, strictEquality, updaterReducer, } from "./functions.js";
import { onNotify, using, zipWithLatestFrom, distinctUntilChanged, dispatchTo, subscribe, } from "./observable.js";
import { createActionReducer, createStreamable, stream as streamStreamable, } from "./streamable.js";
export const createStateStore = (initialState, equals) => createActionReducer(updaterReducer, initialState, equals);
export const toStateStore = (equality = strictEquality) => streamable => createStreamable(updates => using(scheduler => {
    const stream = streamStreamable(streamable, scheduler);
    const updatesSubscription = pipe(updates, zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), distinctUntilChanged(equality), onNotify(dispatchTo(stream)), subscribe(scheduler));
    bindDisposables(updatesSubscription, stream);
    return stream;
}, identity));
