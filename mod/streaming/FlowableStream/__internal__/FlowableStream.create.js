/// <reference types="./FlowableStream.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, compose, isFunction, none, pipe, returns, } from "../../../functions.js";
import Observable_backpressureStrategy from "../../../rx/Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Publisher_create from "../../../rx/Publisher/__internal__/Publisher.create.js";
import { FlowableStreamLike_isPaused, FlowableStreamLike_pause, FlowableStreamLike_resume, } from "../../../streaming.js";
import { EventListenerLike_notify, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Stream_mixin from "../../Stream/__internal__/Stream.mixin.js";
const FlowableStream_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_mixin()), function FlowableStream(instance, op, scheduler, multicastOptions) {
        const publisher = Publisher_create({ replay: 1 });
        const liftedOp = compose(Observable_backpressureStrategy(1, "drop-oldest"), Observable_scan((acc, next) => (isFunction(next) ? next(acc) : next), returns(true)), Observable_mergeWith(
        // Initialize to paused state
        pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), Observable_forEach(bindMethod(publisher, EventListenerLike_notify)), op);
        init(Stream_mixin(), instance, liftedOp, scheduler, multicastOptions);
        pipe(instance, Disposable_add(publisher));
        instance[FlowableStreamLike_isPaused] = publisher;
        return instance;
    }, props({
        [FlowableStreamLike_isPaused]: none,
    }), {
        [FlowableStreamLike_pause]() {
            this[QueueableLike_enqueue](true);
        },
        [FlowableStreamLike_resume]() {
            this[QueueableLike_enqueue](false);
        },
    }));
})();
export default FlowableStream_create;
