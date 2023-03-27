/// <reference types="./FlowableStream.create.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, compose, isFunction, none, pipe, returns, } from "../../../functions.js";
import { PublisherLike_publish } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Publisher_create from "../../../rx/Publisher/__internal__/Publisher.create.js";
import { FlowableStreamLike_isPaused, FlowableStreamLike_pause, FlowableStreamLike_resume, } from "../../../streaming.js";
import { QueueableLike_enqueue } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Stream_mixin from "../../Stream/__internal__/Stream.mixin.js";
const FlowableStream_create = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(mix(include(Stream_mixin()), function FlowableStream(instance, op, scheduler, replay, capacity) {
        const publisher = Publisher_create({ replay: 1 });
        const liftedOp = compose(Observable_scan((acc, next) => (isFunction(next) ? next(acc) : next), returns(true)), Observable_mergeWith(
        // Initialize to paused state
        pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), Observable_forEach(bindMethod(publisher, PublisherLike_publish)), op);
        init(Stream_mixin(), instance, liftedOp, scheduler, replay, capacity);
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
    return (op, scheduler, options) => {
        const { capacity = MAX_SAFE_INTEGER, replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay, capacity);
    };
})();
export default FlowableStream_create;
