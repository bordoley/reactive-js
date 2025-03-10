/// <reference types="./Observer.createWithDelegate.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
const Observer_createWithDelegate = 
/*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, ObserverMixin(), LiftedObserverMixin()), function DelegatingObserver(delegate) {
    init(DisposableMixin, this);
    init(ObserverMixin(), this, delegate, delegate);
    init(LiftedObserverMixin(), this, delegate);
    return this;
}, props(), {
    [ObserverLike_notify](next) {
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
    },
}))();
export default Observer_createWithDelegate;
