/// <reference types="./EventSource.keep.d.ts" />

import { PredicatedLike_predicate, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { identity, none, partial, pipe, } from "../../../functions.js";
import { EventListenerLike_notify, EventSourceLike_addListener, } from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventPublisher_createWithPredicateAndSelector from "../../EventPublisher/__internal__/EventPublisher.createWithPredicateAndSelector.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_keepUsingLift = 
/*@__PURE__*/ (() => {
    const createKeepEventListener = (() => createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function KeepEventListener(instance, delegate, predicate) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[PredicatedLike_predicate] = predicate;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
    }), {
        [EventListenerLike_notify](next) {
            if (this[PredicatedLike_predicate](next)) {
                this[DelegatingLike_delegate][EventListenerLike_notify](next);
            }
        },
    })))();
    return (predicate) => pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();
const EventSource_keep = (predicate, options = {}) => {
    const { replay = 0 } = options;
    return replay === 0
        ? EventSource_keepUsingLift(predicate)
        : (eventSource) => {
            const publisher = EventPublisher_createWithPredicateAndSelector(predicate, identity, options);
            eventSource[EventSourceLike_addListener](publisher);
            return publisher;
        };
};
export default EventSource_keep;
