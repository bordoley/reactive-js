/// <reference types="./Observable.forEach.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { none, partial, pipe } from "../../../functions.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observer_createForEachObserver = /*@__PURE__*/ (() => {
    const ForEachObserver_effect = Symbol("ForEachObserver_effect");
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function ForEachObserver(instance, delegate, effect) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[ForEachObserver_effect] = effect;
        return instance;
    }, props({
        [ForEachObserver_effect]: none,
    }), {
        [SinkLike_notify](next) {
            this[ForEachObserver_effect](next);
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
    })));
})();
const Observable_forEach = (effect) => pipe((Observer_createForEachObserver), partial(effect), Observable_liftWithSideEffects);
export default Observable_forEach;
