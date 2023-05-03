/// <reference types="./Stream.syncState.d.ts" />

import { compose, identity, pipe, } from "../../../functions.js";
import { StreamLike_scheduler, } from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_dispatchTo from "../../../rx/Observable/__internal__/Observable.dispatchTo.js";
import Observable_forkMerge from "../../../rx/Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../../rx/Observable/__internal__/Observable.throttle.js";
const Stream_syncState = (onInit, onChange, options) => {
    const throttleDuration = options?.throttleDuration ?? 0;
    return (stateStore) => {
        const scheduler = options?.scheduler ?? stateStore[StreamLike_scheduler];
        return pipe(stateStore, Observable_forkMerge(compose(Observable_takeFirst(), Observable_concatMap(onInit)), compose(throttleDuration > 0
            ? Observable_throttle(throttleDuration)
            : identity, Observable_pairwise(), Observable_concatMap(([oldValue, newValue]) => onChange(oldValue, newValue)))), Observable_dispatchTo(stateStore), Observable_subscribe(scheduler, {
            backpressureStrategy: options?.backpressureStrategy,
            capacity: options?.capacity,
        }));
    };
};
export default Stream_syncState;
