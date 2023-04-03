/// <reference types="./Observable.subscribeWithDispatcherConfig.d.ts" />

import { DispatcherLike_scheduler, } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";
const Observable_subscribeWithDispatcherConfig = dispatcher => Observable_subscribeWithCapacityAndBackpressureStrategy(dispatcher[DispatcherLike_scheduler], dispatcher[BufferLike_capacity], dispatcher[QueueableLike_backpressureStrategy]);
export default Observable_subscribeWithDispatcherConfig;
