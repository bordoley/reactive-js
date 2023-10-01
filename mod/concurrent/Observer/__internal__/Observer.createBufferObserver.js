/// <reference types="./Observer.createBufferObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete } from "../../../rx.js";
import BufferSinkMixin from "../../../rx/__mixins__/BufferSinkMixin.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createBufferObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), BufferSinkMixin()), function BufferObserver(instance, delegate, count) {
    const onComplete = (buffer) => {
        delegate[QueueableLike_enqueue](buffer);
        delegate[DispatcherLike_complete]();
    };
    init(ObserverMixin(), instance, delegate, delegate);
    init(BufferSinkMixin(), instance, delegate, count, onComplete);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(BufferSinkMixin()))))();
export default Observer_createBufferObserver;
