/// <reference types="./StreamMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingConsumerMixin from "../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../utils/__mixins__/DelegatingPauseableMixin.js";
import * as Observable from "../Observable.js";
import * as ConsumerObservable from "../__internal__/ConsumerObservable.js";
import DelegatingBroadcasterMixin from "./DelegatingBroadcasterMixin.js";
const StreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin, DelegatingConsumerMixin(), DelegatingBroadcasterMixin(), DelegatingPauseableMixin), function Stream(op, scheduler, options) {
    const consumer = ConsumerObservable.create(options);
    const delegate = pipe(consumer, op, Observable.broadcast({
        scheduler,
        autoDispose: options?.autoDispose,
    }), Disposable.addTo(consumer));
    init(DelegatingDisposableMixin, this, consumer);
    init(DelegatingConsumerMixin(), this, consumer);
    init(DelegatingBroadcasterMixin(), this, delegate);
    init(DelegatingPauseableMixin, this, delegate);
    return this;
})))();
export default StreamMixin;
