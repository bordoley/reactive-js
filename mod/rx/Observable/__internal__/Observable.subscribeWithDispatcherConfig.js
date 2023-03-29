/// <reference types="./Observable.subscribeWithDispatcherConfig.d.ts" />

import { DispatcherLike_scheduler, } from "../../../rx.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";
const Observable_subscribeWithDispatcherConfig = dispatcher => Observable_subscribeWithCapacityAndBackpressureStrategy(dispatcher[DispatcherLike_scheduler], dispatcher[QueueableLike_capacity], dispatcher[QueueableLike_backpressureStrategy]);
export default Observable_subscribeWithDispatcherConfig;
