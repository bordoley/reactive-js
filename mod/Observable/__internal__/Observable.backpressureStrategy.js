/// <reference types="./Observable.backpressureStrategy.d.ts" />

import Observer_createBackpressureObserver from "../../Observer/__internal__/Observer.createBackpressureStrategyObserver.js";
import { partial, pipe } from "../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../types.js";
import Observable_liftRunnableBoundedPureObservableOperator from "./Observable.liftRunnableBoundedPureObservableOperator.js";
const Observable_backpressureStrategy = (capacity, backpressureStrategy) => pipe((Observer_createBackpressureObserver), partial({
    [QueueableLike_backpressureStrategy]: backpressureStrategy,
    [QueueableLike_capacity]: capacity,
}), (Observable_liftRunnableBoundedPureObservableOperator));
export default Observable_backpressureStrategy;
