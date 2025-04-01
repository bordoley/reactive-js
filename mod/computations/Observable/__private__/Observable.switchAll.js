/// <reference types="./Observable.switchAll.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ReactiveSourceLike_subscribe, } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import * as Computation from "../../Computation.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import SwitchAllConsumerMixin from "../../__mixins__/SwitchAllConsumerMixin.js";
export const createSwitchAllObserver = 
/*@__PURE__*/
(() => mixInstanceFactory(include(SwitchAllConsumerMixin(), DelegatingSchedulerMixin), function SwitchAllObserver(delegate) {
    init(SwitchAllConsumerMixin(), this, delegate, Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}))();
const Observable_switchAll = ((innerType) => (obs) => DeferredReactiveSource.create((observer) => {
    const delegate = createSwitchAllObserver(observer);
    obs[ReactiveSourceLike_subscribe](delegate);
}, {
    [ComputationLike_isPure]: Computation.isPure(obs) && Computation.isPure(innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(obs) &&
        Computation.isSynchronous(innerType ?? {}),
}));
export default Observable_switchAll;
