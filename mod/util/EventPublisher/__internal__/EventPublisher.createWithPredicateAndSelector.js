/// <reference types="./EventPublisher.createWithPredicateAndSelector.d.ts" />

import { MappingLike_selector, PredicatedLike_predicate, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __EventPublisher_listeners } from "../../../__internal__/symbols.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../containers.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import { error, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_isErrorSafe, EventListenerLike_notify, EventPublisherLike_listenerCount, EventSourceLike_addEventListener, } from "../../../util.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
const EventPublisher_createWithPredicateAndSelector = /*@__PURE__*/ (() => {
    const createPublisherInstance = createInstanceFactory(mix(include(Disposable_mixin), function EventPublisher(instance, predicate, selector) {
        init(Disposable_mixin, instance);
        instance[__EventPublisher_listeners] =
            newInstance(Set);
        instance[PredicatedLike_predicate] = predicate;
        instance[MappingLike_selector] = selector;
        pipe(instance, Disposable_onDisposed(e => {
            const enumerator = pipe(instance[__EventPublisher_listeners], Iterable_enumerate());
            while (enumerator[EnumeratorLike_move]()) {
                const listener = enumerator[EnumeratorLike_current];
                listener[DisposableLike_dispose](e);
            }
        }));
        return instance;
    }, props({
        [__EventPublisher_listeners]: none,
        [PredicatedLike_predicate]: none,
        [MappingLike_selector]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        get [EventPublisherLike_listenerCount]() {
            unsafeCast(this);
            return this[__EventPublisher_listeners].size;
        },
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            if (!this[PredicatedLike_predicate](next)) {
                return;
            }
            const result = this[MappingLike_selector](next);
            for (const listener of this[__EventPublisher_listeners]) {
                try {
                    listener[EventListenerLike_notify](result);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
            }
        },
        [EventSourceLike_addEventListener](listener) {
            if (!this[DisposableLike_isDisposed]) {
                const listeners = this[__EventPublisher_listeners];
                listeners.add(listener);
                pipe(listener, Disposable_onDisposed(_ => {
                    listeners.delete(listener);
                }));
            }
        },
    }));
    return (predicate, selector) => {
        return createPublisherInstance(predicate, selector);
    };
})();
export default EventPublisher_createWithPredicateAndSelector;
