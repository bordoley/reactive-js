/// <reference types="./Stream.syncState.d.ts" />

import { compose, identity, pipe, } from "../../../functions.js";
import * as Observable from "../../Observable.js";
const Stream_syncState = (onInit, onChange, options) => {
    const throttleDuration = options?.throttleDuration ?? 0;
    return (stateStore) => pipe(stateStore, Observable.forkMerge(compose(Observable.takeFirst(), Observable.concatMap(onInit, {
        innerType: Observable.DeferredObservableWithSideEffectsType,
    })), compose(throttleDuration > 0
        ? Observable.throttle(throttleDuration)
        : identity, Observable.pairwise(), Observable.concatMap(([oldValue, newValue]) => onChange(oldValue, newValue), { innerType: Observable.DeferredObservableWithSideEffectsType }))), Observable.dispatchTo(stateStore), Observable.ignoreElements());
};
export default Stream_syncState;
