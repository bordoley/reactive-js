/// <reference types="./StreamMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import { clampPositiveInteger } from "../../math.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../../utils/__mixins__/DelegatingQueueableMixin.js";
import { OverflowBackpressureStrategy, } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as QueueableObservable from "../__internal__/QueueableObservable.js";
import DelegatingMulticastObservableMixin from "../__mixins__/DelegatingMulticastObservableMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin, DelegatingQueueableMixin(), DelegatingMulticastObservableMixin()), function Stream(op, scheduler, options) {
    const queue = QueueableObservable.create(options);
    const delegate = pipe(queue, Observable.backpressureStrategy({
        backpressureStrategy: options?.backpressureStrategy ?? OverflowBackpressureStrategy,
        capacity: clampPositiveInteger(options?.capacity ?? MAX_SAFE_INTEGER),
    }), op, Observable.multicast(scheduler, options), Disposable.addTo(queue));
    init(DelegatingDisposableMixin, this, queue);
    init(DelegatingQueueableMixin(), this, queue);
    init(DelegatingMulticastObservableMixin(), this, delegate);
    return this;
})))();
export default StreamMixin;
