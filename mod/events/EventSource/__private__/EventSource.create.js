/// <reference types="./EventSource.create.d.ts" />

import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import { EventSourceLike_addEventListener, } from "../../../events.js";
import { error, none, pipe, } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Publisher from "../../Publisher.js";
const EventSource_create = /*@__PURE__*/ (() => {
    const CreateEventSource_delegate = Symbol("CreateEventSource_delegate");
    const CreateEventSource_setup = Symbol("CreateEventSource_setup");
    return mixInstanceFactory(function CreateEventSource(instance, setup) {
        instance[CreateEventSource_setup] = setup;
        // Pass in the initial listener to the setup function
        // so that we can connect it to the publisher before
        // the setup function is run, in case the setup function
        // publishes notifications. useful for testing.
        return instance;
    }, props({
        [CreateEventSource_delegate]: none,
        [CreateEventSource_setup]: none,
    }), {
        [EventSourceLike_addEventListener](listener) {
            const delegate = this[CreateEventSource_delegate] ??
                (() => {
                    const delegate = pipe(Publisher.create({
                        autoDispose: true,
                    }), Disposable.onDisposed(() => {
                        this[CreateEventSource_delegate] = none;
                    }));
                    this[CreateEventSource_delegate] = delegate;
                    try {
                        this[CreateEventSource_setup](delegate);
                    }
                    catch (e) {
                        delegate[DisposableLike_dispose](error(e));
                    }
                    return delegate;
                })();
            delegate[EventSourceLike_addEventListener](listener);
        },
    });
})();
export default EventSource_create;
