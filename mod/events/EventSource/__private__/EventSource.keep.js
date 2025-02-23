/// <reference types="./EventSource.keep.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_notify, } from "../../../events.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_keep = /*@__PURE__*/ (() => {
    const KeepEventListener_predicate = Symbol("KeepEventListener_predicate");
    const KeepEventListener_delegate = Symbol("KeepEventListener_delegate");
    const createKeepEventListener = (() => mixInstanceFactory(include(DelegatingDisposableMixin()), function KeepEventListener(instance, delegate, predicate) {
        init(DelegatingDisposableMixin(), instance, delegate);
        instance[KeepEventListener_predicate] = predicate;
        instance[KeepEventListener_delegate] = delegate;
        return instance;
    }, props({
        [KeepEventListener_predicate]: none,
        [KeepEventListener_delegate]: none,
    }), {
        [EventListenerLike_notify](next) {
            if (this[KeepEventListener_predicate](next)) {
                this[KeepEventListener_delegate][EventListenerLike_notify](next);
            }
        },
    }))();
    return (predicate) => pipe((createKeepEventListener), partial(predicate), EventSource_lift);
})();
export default EventSource_keep;
