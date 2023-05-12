/// <reference types="./Stream.syncState.d.ts" />

import Observable_dispatchTo from "../../Observable/__internal__/Observable.dispatchTo.js";
import Observable_forkMerge from "../../Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../Observable/__internal__/Observable.throttle.js";
import SharedObservable_concatMap from "../../SharedObservable/__internal__/SharedObservable.concatMap.js";
import { compose, identity, pipe } from "../../functions.js";
import { StreamLike_scheduler, } from "../../types.js";
const Stream_syncState = (onInit, onChange, options) => {
    const throttleDuration = options?.throttleDuration ?? 0;
    return (stateStore) => {
        const scheduler = options?.scheduler ?? stateStore[StreamLike_scheduler];
        return pipe(stateStore, Observable_forkMerge(compose(Observable_takeFirst(), SharedObservable_concatMap(onInit)), compose(throttleDuration > 0
            ? Observable_throttle(throttleDuration)
            : identity, Observable_pairwise(), SharedObservable_concatMap(([oldValue, newValue]) => onChange(oldValue, newValue)))), Observable_dispatchTo(stateStore), Observable_subscribe(scheduler, {
            backpressureStrategy: options?.backpressureStrategy,
            capacity: options?.capacity,
        }));
    };
};
export default Stream_syncState;
