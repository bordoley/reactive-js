/// <reference types="./EventSource.forEach.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, ForEachLike_effect, } from "../../__internal__/types.js";
import { none, partial, pipe } from "../../functions.js";
import { EventListenerLike_isErrorSafe, EventListenerLike_notify, } from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_forEach = 
/*@__PURE__*/ (() => {
    const createForEachEventListener = (() => createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function ForEachEventListener(instance, delegate, effect) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[ForEachLike_effect] = effect;
        return instance;
    }, props({
        [ForEachLike_effect]: none,
    }), {
        [EventListenerLike_isErrorSafe]: false,
        [EventListenerLike_notify](next) {
            this[ForEachLike_effect](next);
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
        },
    })))();
    return (effect) => pipe(createForEachEventListener, partial(effect), EventSource_lift);
})();
export default EventSource_forEach;
