/// <reference types="./Observable.buffer.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete } from "../../../concurrent.js";
import BufferSinkMixin from "../../../events/__mixins__/BufferSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createBufferObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), BufferSinkMixin()), function BufferObserver(instance, delegate, count) {
    const onComplete = (buffer) => {
        delegate[QueueableLike_enqueue](buffer);
        delegate[DispatcherLike_complete]();
    };
    init(ObserverMixin(), instance, delegate, delegate);
    init(BufferSinkMixin(), instance, delegate, count, onComplete);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(BufferSinkMixin()))))();
const Observable_buffer = (options) => pipe((Observer_createBufferObserver), partial(options?.count), Observable_liftPure);
export default Observable_buffer;
