/// <reference types="./Stream.syncState.d.ts" />

import { compose, identity, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler } from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_forkMerge from "../../../rx/Observable/__internal__/Observable.forkMerge.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observable_takeFirst from "../../../rx/Observable/__internal__/Observable.takeFirst.js";
import Observable_throttle from "../../../rx/Observable/__internal__/Observable.throttle.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const Stream_syncState = (onInit, onChange, options) => {
    var _a;
    const throttleDuration = (_a = options === null || options === void 0 ? void 0 : options.throttleDuration) !== null && _a !== void 0 ? _a : 0;
    return (stateStore) => {
        var _a, _b, _c;
        const scheduler = (_a = options === null || options === void 0 ? void 0 : options.scheduler) !== null && _a !== void 0 ? _a : stateStore[DispatcherLike_scheduler];
        const backpressureStrategy = (_b = options === null || options === void 0 ? void 0 : options.backpressureStrategy) !== null && _b !== void 0 ? _b : stateStore[QueueableLike_backpressureStrategy];
        const capacity = (_c = options === null || options === void 0 ? void 0 : options.capacity) !== null && _c !== void 0 ? _c : stateStore[QueueableLike_capacity];
        pipe(stateStore, Observable_forkMerge(compose(Observable_takeFirst(), Observable_concatMap(onInit)), compose(throttleDuration > 0
            ? Observable_throttle(throttleDuration)
            : identity, Observable_pairwise(), Observable_concatMap(([oldValue, newValue]) => onChange(oldValue, newValue)))), Observable_enqueue(stateStore), Observable_subscribe(scheduler, {
            backpressureStrategy,
            capacity,
        }), Disposable_addTo(stateStore));
        return stateStore;
    };
};
export default Stream_syncState;
