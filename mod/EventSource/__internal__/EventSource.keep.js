/// <reference types="./EventSource.keep.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, } from "../../__internal__/types.js";
import { none, partial, pipe } from "../../functions.js";
import { EventListenerLike_isErrorSafe, EventListenerLike_notify, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_keep = /*@__PURE__*/ (() => {
    const createKeepEventListener = (() => createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function KeepEventListener(instance, delegate, predicate) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[PredicatedLike_predicate] = predicate;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
    }), {
        [EventListenerLike_isErrorSafe]: false,
        [EventListenerLike_notify](next) {
            if (this[PredicatedLike_predicate](next)) {
                this[DelegatingLike_delegate][EventListenerLike_notify](next);
            }
        },
    })))();
    return (predicate) => pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();
export default EventSource_keep;
