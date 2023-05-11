/// <reference types="./Observable.backpressureStrategy.d.ts" />

import Observer_createBackpressureObserver from "../../Observer/__internal__/Observer.createBackpressureStrategyObserver.js";
import { partial, pipe } from "../../functions.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../types.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_backpressureStrategy = (capacity, backpressureStrategy) => pipe(Observer_createBackpressureObserver, partial({
    [QueueableLike_backpressureStrategy]: backpressureStrategy,
    [BufferLike_capacity]: capacity,
}), Observable_liftEnumerableUpperBounded);
export default Observable_backpressureStrategy;
