import { bindDisposables } from "./disposable.js";
import { pipe, identity, updaterReducer, compose, } from "./functions.js";
import { onNotify, using, zipWithLatestFrom, dispatchTo, subscribe, } from "./observable.js";
import { createActionReducer, createStreamable, stream as streamStreamable, mapReq, map as mapStream, } from "./streamable.js";
export const createStateStore = (initialState, equals) => createActionReducer(updaterReducer, initialState, equals);
export const toStateStore = () => streamable => createStreamable(updates => using(scheduler => {
    const stream = streamStreamable(streamable, scheduler);
    const updatesSubscription = pipe(updates, zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), onNotify(dispatchTo(stream)), subscribe(scheduler));
    bindDisposables(updatesSubscription, stream);
    return stream;
}, identity));
const requestMapper = (parse, serialize) => (stateUpdater) => oldStateTA => {
    const oldStateTB = parse(oldStateTA);
    const newStateTB = stateUpdater(oldStateTB);
    return oldStateTB === newStateTB ? oldStateTA : serialize(newStateTB);
};
export const map = (parse, serialize) => compose(mapReq(requestMapper(parse, serialize)), mapStream(parse));
