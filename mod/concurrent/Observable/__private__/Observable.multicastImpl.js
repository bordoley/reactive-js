/// <reference types="./Observable.multicastImpl.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { SinkLike_notify } from "../../../events.js";
import { bindMethod, pipe } from "../../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_multicastImpl = (subjectFactory, scheduler, options = {}) => observable => {
    const { autoDispose = false, backpressureStrategy = "overflow", capacity = MAX_SAFE_INTEGER, replay = 0, } = options;
    const subject = subjectFactory({ autoDispose, replay });
    pipe(observable, Observable_forEach(bindMethod(subject, SinkLike_notify)), Observable_subscribeWithConfig(scheduler, {
        [QueueableLike_capacity]: capacity,
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
    }), Disposable.bindTo(subject));
    return subject;
};
export default Observable_multicastImpl;
