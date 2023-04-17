/// <reference types="./EventSource.forEach.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { none, partial, pipe } from "../../../functions.js";
import { EventListenerLike_notify, } from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_forEach = 
/*@__PURE__*/ (() => {
    const createForEachEventListener = (() => createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function ForEachEventListener(instance, delegate, effect) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance.ef = effect;
        return instance;
    }, props({
        ef: none,
    }), {
        [EventListenerLike_notify](next) {
            this.ef(next);
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
        },
    })))();
    return (effect) => pipe(createForEachEventListener, partial(effect), EventSource_lift);
})();
export default EventSource_forEach;
