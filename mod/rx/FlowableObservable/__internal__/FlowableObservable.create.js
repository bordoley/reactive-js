/// <reference types="./FlowableObservable.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, compose, isFunction, none, pipe, returns, } from "../../../functions.js";
import { FlowableObservableLike_isPaused, FlowableObservableLike_pause, FlowableObservableLike_resume, } from "../../../rx.js";
import Stream_mixin from "../../../streaming/Stream/__internal__/Stream.mixin.js";
import { EventListenerLike_notify, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Observable_backpressureStrategy from "../../Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../Observable/__internal__/Observable.scan.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
const FlowableObservable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_mixin()), function FlowableObservable(instance, op, scheduler, multicastOptions) {
        const publisher = Publisher_create({ replay: 1 });
        const liftedOp = compose(Observable_backpressureStrategy(1, "drop-oldest"), Observable_scan((acc, next) => (isFunction(next) ? next(acc) : next), returns(true)), Observable_mergeWith(
        // Initialize to paused state
        pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), Observable_forEach(bindMethod(publisher, EventListenerLike_notify)), op);
        init(Stream_mixin(), instance, liftedOp, scheduler, multicastOptions);
        pipe(instance, Disposable_add(publisher));
        instance[FlowableObservableLike_isPaused] = publisher;
        return instance;
    }, props({
        [FlowableObservableLike_isPaused]: none,
    }), {
        [FlowableObservableLike_pause]() {
            this[QueueableLike_enqueue](true);
        },
        [FlowableObservableLike_resume]() {
            this[QueueableLike_enqueue](false);
        },
    }));
})();
export default FlowableObservable_create;
