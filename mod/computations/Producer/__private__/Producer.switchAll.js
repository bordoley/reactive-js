/// <reference types="./Producer.switchAll.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ReactiveSourceLike_subscribe, } from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import * as Computation from "../../Computation.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import SwitchAllConsumerMixin from "../../__mixins__/SwitchAllConsumerMixin.js";
export const createSwitchAllConsumer = 
/*@__PURE__*/
(() => mixInstanceFactory(include(SwitchAllConsumerMixin()), function SwitchAllConsumer(delegate) {
    init(SwitchAllConsumerMixin(), this, delegate, Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
    return this;
}))();
const Producer_switchAll = ((innerType) => (obs) => DeferredReactiveSource.create((Consumer) => {
    const delegate = createSwitchAllConsumer(Consumer);
    obs[ReactiveSourceLike_subscribe](delegate);
}, {
    [ComputationLike_isPure]: Computation.isPure(obs) && Computation.isPure(innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(obs) &&
        Computation.isSynchronous(innerType ?? {}),
}));
export default Producer_switchAll;
