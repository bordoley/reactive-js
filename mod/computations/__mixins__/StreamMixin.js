/// <reference types="./StreamMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import { clampPositiveInteger } from "../../math.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingConsumerMixin from "../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { OverflowBackpressureStrategy, } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as Producer from "../Producer.js";
import * as ConsumerObservable from "../__internal__/ConsumerObservable.js";
import DelegatingBroadcasterMixin from "./DelegatingBroadcasterMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin, DelegatingConsumerMixin(), DelegatingBroadcasterMixin()), function Stream(op, scheduler, options) {
    const consumer = ConsumerObservable.create(options);
    const delegate = pipe(consumer, Observable.withBackpressure({
        backpressureStrategy: options?.backpressureStrategy ?? OverflowBackpressureStrategy,
        capacity: clampPositiveInteger(options?.capacity ?? MAX_SAFE_INTEGER),
    }), op, Observable.toProducer({ scheduler }), Producer.broadcast({
        autoDispose: options?.autoDispose,
    }), Disposable.addTo(consumer));
    init(DelegatingDisposableMixin, this, consumer);
    init(DelegatingConsumerMixin(), this, consumer);
    init(DelegatingBroadcasterMixin(), this, delegate);
    return this;
})))();
export default StreamMixin;
