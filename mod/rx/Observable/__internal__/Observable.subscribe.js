/// <reference types="./Observable.subscribe.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { DispatcherLike_scheduler } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_subscribe = (scheduler, options) => Observable_subscribeWithConfig({
    [DispatcherLike_scheduler]: scheduler,
    [BufferLike_capacity]: options?.capacity ?? MAX_SAFE_INTEGER,
    [QueueableLike_backpressureStrategy]: options?.backpressureStrategy ?? "overflow",
});
export default Observable_subscribe;
