/// <reference types="./Stream.syncState.d.ts" />

import { StreamLike_scheduler, } from "../../../concurrent.js";
import { compose, identity, pipe, } from "../../../functions.js";
import * as Observable from "../../Observable.js";
const Stream_syncState = (onInit, onChange, options) => {
    const throttleDuration = options?.throttleDuration ?? 0;
    return (stateStore) => {
        const scheduler = options?.scheduler ?? stateStore[StreamLike_scheduler];
        return pipe(stateStore, Observable.forkMerge(compose(Observable.takeFirst(), Observable.concatMap(onInit, {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        })), compose(throttleDuration > 0
            ? Observable.throttle(throttleDuration)
            : identity, Observable.pairwise(), Observable.concatMap(([oldValue, newValue]) => onChange(oldValue, newValue), { innerType: Observable.DeferredObservableWithSideEffectsType }))), Observable.dispatchTo(stateStore), Observable.subscribe(scheduler, {
            backpressureStrategy: options?.backpressureStrategy,
            capacity: options?.capacity,
        }));
    };
};
export default Stream_syncState;
