/// <reference types="./Observer.createBufferObserver.d.ts" />

import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import Sink_bufferMixin from "../../Sink/__internal__/Sink.bufferMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe } from "../../types.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createBufferObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_mixin(), Sink_bufferMixin()), function BufferObserver(instance, delegate, count) {
    const onComplete = (buffer) => {
        pipe(buffer, Optional_toObservable(), invoke(ObservableLike_observe, delegate));
    };
    init(Observer_mixin(), instance, delegate, delegate);
    init(Sink_bufferMixin(), instance, delegate, count, onComplete);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_bufferMixin()))))();
export default Observer_createBufferObserver;
