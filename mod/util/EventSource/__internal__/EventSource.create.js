/// <reference types="./EventSource.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __CreateEventSource_createDelegate } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { error, none, pipe, } from "../../../functions.js";
import { BufferLike_capacity, DisposableLike_dispose, EventEmitterLike_addListener, ReplayableLike_buffer, } from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import EventPublisher_createRefCounted from "../../EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import IndexedBufferCollection_createWithMutableDelegate from "../../IndexedBufferCollection/__internal__/IndexedBufferCollection.createWithMutableDelegate.js";
const EventSource_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Delegating_mixin()), function CreateEventSource(instance, setup, options = {}) {
        init(Delegating_mixin(), instance, none);
        instance[ReplayableLike_buffer] =
            IndexedBufferCollection_createWithMutableDelegate({
                [BufferLike_capacity]: options.replay,
            });
        instance[__CreateEventSource_createDelegate] = () => {
            const delegate = pipe(EventPublisher_createRefCounted(options), Disposable_onDisposed(() => {
                instance[DelegatingLike_delegate] = none;
            }));
            instance[DelegatingLike_delegate] = delegate;
            try {
                setup(delegate);
            }
            catch (e) {
                delegate[DisposableLike_dispose](error(e));
            }
            const buffer = delegate[ReplayableLike_buffer];
            instance[ReplayableLike_buffer][DelegatingLike_delegate] = buffer;
            return delegate;
        };
        return instance;
    }, props({
        [__CreateEventSource_createDelegate]: none,
        [ReplayableLike_buffer]: none,
    }), {
        [EventEmitterLike_addListener](listener) {
            const delegate = this[DelegatingLike_delegate] ??
                this[__CreateEventSource_createDelegate]();
            delegate[EventEmitterLike_addListener](listener);
        },
    }));
})();
export default EventSource_create;
