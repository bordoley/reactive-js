/// <reference types="./Observable.buffer.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete } from "../../../concurrent.js";
import BufferSinkMixin from "../../../events/__mixins__/BufferSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createBufferObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), BufferSinkMixin()), function BufferObserver(instance, delegate, count) {
    const onComplete = (buffer) => {
        delegate[QueueableLike_enqueue](buffer);
        delegate[DispatcherLike_complete]();
    };
    init(ObserverMixin(), instance, delegate, delegate);
    init(BufferSinkMixin(), instance, delegate, count, onComplete);
    return instance;
}))))();
const Observable_buffer = (options) => pipe((Observer_createBufferObserver), partial(options?.count), Observable_liftPure);
export default Observable_buffer;
