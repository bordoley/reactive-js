/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, } from "../../../computations.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const createObserver = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin, ObserverMixin()), function SubscribeObserver(instance, scheduler, config) {
        init(DisposableMixin, instance);
        init(ObserverMixin(), instance, scheduler, config);
        return instance;
    });
})();
const Observable_subscribeWithConfig = (scheduler, config) => (observable) => {
    const observer = createObserver(scheduler, config);
    scheduler[DisposableContainerLike_add](observer);
    observable[ObservableLike_observe](observer);
    return observer;
};
export default Observable_subscribeWithConfig;
