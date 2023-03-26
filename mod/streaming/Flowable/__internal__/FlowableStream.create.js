/// <reference types="./FlowableStream.create.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, compose, isFunction, none, pipe, returns, } from "../../../functions.js";
import { SubjectLike_publish } from "../../../rx.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Subject_create from "../../../rx/Subject/__internal__/Subject.create.js";
import { FlowableStreamLike_isPaused, FlowableStreamLike_pause, FlowableStreamLike_resume, } from "../../../streaming.js";
import { QueueableLike_push } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Stream_mixin from "../../Stream/__internal__/Stream.mixin.js";
const FlowableStream_create = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(mix(include(Stream_mixin()), function FlowableStream(instance, op, scheduler, replay, maxBufferSize) {
        const subject = Subject_create({ replay: 1 });
        const liftedOp = compose(Observable_scan((acc, next) => (isFunction(next) ? next(acc) : next), returns(true)), Observable_mergeWith(
        // Initialize to paused state
        pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), Observable_forEach(bindMethod(subject, SubjectLike_publish)), op);
        init(Stream_mixin(), instance, liftedOp, scheduler, replay, maxBufferSize);
        pipe(instance, Disposable_add(subject));
        instance[FlowableStreamLike_isPaused] = subject;
        return instance;
    }, props({
        [FlowableStreamLike_isPaused]: none,
    }), {
        [FlowableStreamLike_pause]() {
            this[QueueableLike_push](true);
        },
        [FlowableStreamLike_resume]() {
            this[QueueableLike_push](false);
        },
    }));
    return (op, scheduler, options) => {
        const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay, maxBufferSize);
    };
})();
export default FlowableStream_create;
