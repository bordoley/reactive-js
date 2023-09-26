/// <reference types="./EventSource.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe, } from "../../../functions.js";
import { EventSourceLike_addEventListener, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
const CreateEventSource_delegate = Symbol("CreateEventSource_delegate");
const CreateEventSource_createDelegate = Symbol("CreateEventSource_createDelegate");
const EventSource_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateEventSource(instance, setup) {
        // Pass in the initial listener to the setup function
        // so that we can connect it to the publisher before
        // the setup function is run, in case the setup function
        // publishes notifications. useful for testing.
        instance[CreateEventSource_createDelegate] = (listener) => {
            const delegate = pipe(Publisher_createRefCounted(), Disposable.onDisposed(() => {
                instance[CreateEventSource_delegate] = none;
            }));
            delegate[EventSourceLike_addEventListener](listener);
            instance[CreateEventSource_delegate] = delegate;
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
        [CreateEventSource_delegate]: none,
        [CreateEventSource_createDelegate]: none,
    }), {
        [EventSourceLike_addEventListener](listener) {
            const delegate = this[CreateEventSource_delegate] ??
                this[CreateEventSource_createDelegate](listener);
            delegate[EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default EventSource_create;
