/// <reference types="./Observer.createWithDelegate.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../computations/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../computations/__mixins__/ObserverMixin.js";
import { ObserverLike_notify } from "../../../computations.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, ObserverMixin(), LiftedObserverMixin()), function DelegatingObserver(instance, delegate) {
    init(DisposableMixin, instance);
    init(ObserverMixin(), instance, delegate, delegate);
    init(LiftedObserverMixin(), instance, delegate);
    return instance;
}, props(), {
    [ObserverLike_notify](next) {
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
    },
}))();
export default Observer_createWithDelegate;
