/// <reference types="./EventSource.create.d.ts" />

import { createInstanceFactory, include, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { error, none, pipe, } from "../../../functions.js";
import { DisposableLike_dispose, EventSourceLike_addListener, ReplayableLike_buffer, } from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import EventPublisher_createRefCounted from "../../EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import IndexedBufferCollection_createWithMutableDelegate from "../../IndexedBufferCollection/__internal__/IndexedBufferCollection.createWithMutableDelegate.js";
const EventSource_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Delegating_mixin()), function CreateEventSource(instance, setup, options) {
        instance.su = setup;
        instance.op = options;
        instance[ReplayableLike_buffer] =
            IndexedBufferCollection_createWithMutableDelegate();
        return instance;
    }, props({
        su: none,
        op: none,
        [ReplayableLike_buffer]: none,
    }), {
        [EventSourceLike_addListener](listener) {
            const delegate = this[DelegatingLike_delegate] ??
                (() => {
                    const delegate = pipe(EventPublisher_createRefCounted(this.op), Disposable_onDisposed(() => {
                        this[DelegatingLike_delegate] = none;
                    }));
                    this[DelegatingLike_delegate] = delegate;
                    try {
                        this.su(delegate);
                    }
                    catch (e) {
                        delegate[DisposableLike_dispose](error(e));
                    }
                    const buffer = delegate[ReplayableLike_buffer];
                    this[ReplayableLike_buffer][DelegatingLike_delegate] = buffer;
                    return delegate;
                })();
            delegate[EventSourceLike_addListener](listener);
        },
    }));
})();
export default EventSource_create;
