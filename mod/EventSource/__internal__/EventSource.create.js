/// <reference types="./EventSource.create.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import EventSource_createRefCountedPublisher from "../../EventSource/__internal__/EventSource.createRefCountedPublisher.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __CreateEventSource_createDelegate } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { error, none, pipe, } from "../../functions.js";
import { DisposableLike_dispose, EventSourceLike_addEventListener, } from "../../types.js";
const EventSource_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Delegating_mixin()), function CreateEventSource(instance, setup) {
        init(Delegating_mixin(), instance, none);
        // Pass in the initial listener to the setup function
        // so that we can connect it to the publisher before
        // the setup function is run, in case the setup function
        // publishes notifications. useful for testing.
        instance[__CreateEventSource_createDelegate] = (listener) => {
            const delegate = pipe(EventSource_createRefCountedPublisher(), Disposable_onDisposed(() => {
                instance[DelegatingLike_delegate] = none;
            }));
            delegate[EventSourceLike_addEventListener](listener);
            instance[DelegatingLike_delegate] = delegate;
            try {
                setup(delegate);
            }
            catch (e) {
                delegate[DisposableLike_dispose](error(e));
            }
            return delegate;
        };
        return instance;
    }, props({
        [__CreateEventSource_createDelegate]: none,
    }), {
        [EventSourceLike_addEventListener](listener) {
            const delegate = this[DelegatingLike_delegate] ??
                this[__CreateEventSource_createDelegate](listener);
            delegate[EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default EventSource_create;
