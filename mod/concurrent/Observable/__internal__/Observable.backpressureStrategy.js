/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { partial, pipe } from "../../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import Observer_createBackpressureObserver from "../../Observer/__internal__/Observer.createBackpressureStrategyObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_backpressureStrategy = (capacity, backpressureStrategy) => pipe((Observer_createBackpressureObserver), partial({
    [QueueableLike_backpressureStrategy]: backpressureStrategy,
    [QueueableLike_capacity]: capacity,
}), (Observable_liftPure));
export default Observable_backpressureStrategy;
