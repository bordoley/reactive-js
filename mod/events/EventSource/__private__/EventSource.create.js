/// <reference types="./EventSource.create.d.ts" />

import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isSynchronous, } from "../../../computations.js";
import { EventSourceLike_addEventListener, } from "../../../events.js";
import { error, none, pipe, } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Publisher from "../../Publisher.js";
const EventSource_create = /*@__PURE__*/ (() => {
    const CreateEventSource_delegate = Symbol("CreateEventSource_delegate");
    const CreateEventSource_setup = Symbol("CreateEventSource_setup");
    function onCreateEventSourcePublisherDisposed() {
        this[CreateEventSource_delegate] = none;
    }
    return mixInstanceFactory(function CreateEventSource(instance, setup) {
        instance[CreateEventSource_setup] = setup;
        return instance;
    }, props({
        [CreateEventSource_delegate]: none,
        [CreateEventSource_setup]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isInteractive]: false,
        [EventSourceLike_addEventListener](listener) {
            const delegate = this[CreateEventSource_delegate] ??
                (() => {
                    const delegate = pipe(Publisher.create({
                        autoDispose: true,
                    }), DisposableContainer.onDisposed(onCreateEventSourcePublisherDisposed));
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
