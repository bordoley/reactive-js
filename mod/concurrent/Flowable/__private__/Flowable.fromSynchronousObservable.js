/// <reference types="./Flowable.fromSynchronousObservable.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { FlowableLike_flow, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
import DelegatingPauseableMixin from "../../__mixins__/DelegatingPauseableMixin.js";
const PauseableSynchronousObservable_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin(), DelegatingMulticastObservableMixin(), DelegatingPauseableMixin), function PauseableSynchronousObservable(instance, obs, scheduler, multicastOptions) {
        const pauseableScheduler = PauseableScheduler.create(scheduler);
        init(DelegatingDisposableMixin(), instance, pauseableScheduler);
        init(DelegatingPauseableMixin, instance, pauseableScheduler);
        const multicastObs = pipe(obs, Observable.multicast(pauseableScheduler, multicastOptions), Disposable.bindTo(instance));
        init(DelegatingMulticastObservableMixin(), instance, multicastObs);
        return instance;
    });
})();
const Flowable_fromSynchronousObservable = () => (obs) => ({
    [FlowableLike_flow]: (scheduler, options) => PauseableSynchronousObservable_create(obs, scheduler, options),
});
export default Flowable_fromSynchronousObservable;
