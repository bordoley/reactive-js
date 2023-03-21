/// <reference types="./FlowableStream.create.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { FlowableStreamLike_isPaused } from "../../../__internal__/symbols.js";
import { compose, isFunction, none, pipe, returns, } from "../../../functions.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Subject_create from "../../../rx/Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../../rx/Subject/__internal__/Subject.publishTo.js";
import { FlowableState_paused, } from "../../../streaming.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Stream_mixin from "../../Stream/__internal__/Stream.mixin.js";
const FlowableStream_create = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(mix(include(Stream_mixin()), function FlowableStream(instance, op, scheduler, replay, maxBufferSize) {
        const subject = Subject_create({ replay: 1 });
        const liftedOp = compose(Observable_scan((acc, next) => (isFunction(next) ? next(acc) : next), returns(FlowableState_paused)), Observable_distinctUntilChanged(), Observable_forEach(Subject_publishTo(subject)), op);
        init(Stream_mixin(), instance, liftedOp, scheduler, replay, maxBufferSize);
        pipe(instance, Disposable_add(subject));
        instance[FlowableStreamLike_isPaused] = pipe(subject, Observable_map(state => state === FlowableState_paused), Observable_distinctUntilChanged());
        return instance;
    }, props({
        [FlowableStreamLike_isPaused]: none,
    }), {}));
    return (op, scheduler, options) => {
        const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay, maxBufferSize);
    };
})();
export default FlowableStream_create;
