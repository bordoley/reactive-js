/// <reference types="./EventSource.takeLast.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import IndexedCollection_toEventSource from "../../IndexedCollection/__internal__/IndexedCollection.toEventSource.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { TakeLastLike_queue, } from "../../__internal__/types.js";
import { invoke, none, partial, pipe } from "../../functions.js";
import { EventListenerLike_isErrorSafe, EventSourceLike_addEventListener, QueueableLike_enqueue, SinkLike_notify, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_takeLast = 
/*@__PURE__*/ (() => {
    const createTakeLastEventListener = (() => createInstanceFactory(mix(include(Disposable_mixin, Delegating_mixin()), function TakeLastEventListener(instance, delegate, takeLastCount) {
        init(Disposable_mixin, instance);
        instance[TakeLastLike_queue] = Queue_createIndexedQueue(takeLastCount, "drop-oldest");
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe(instance[TakeLastLike_queue], IndexedCollection_toEventSource(), invoke(EventSourceLike_addEventListener, delegate));
        }));
        return instance;
    }, props({
        [TakeLastLike_queue]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        [SinkLike_notify](next) {
            this[TakeLastLike_queue][QueueableLike_enqueue](next);
        },
    })))();
    return (options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return pipe((createTakeLastEventListener), partial(count), EventSource_lift);
    };
})();
export default EventSource_takeLast;
