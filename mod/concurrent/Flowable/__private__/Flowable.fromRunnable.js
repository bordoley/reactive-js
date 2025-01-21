/// <reference types="./Flowable.fromRunnable.d.ts" />

import { include, init, mixInstanceFactory, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { FlowableLike_flow, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import * as Observable from "../../Observable.js";
import * as PauseableScheduler from "../../PauseableScheduler.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
const PauseableRunnable_create = /*@__PURE__*/ (() => {
    const PauseableRunnable_scheduler = Symbol("PauseableRunnable_scheduler");
    return mixInstanceFactory(include(DelegatingDisposableMixin(), DelegatingMulticastObservableMixin()), function PauseableRunnable(instance, obs, scheduler, multicastOptions) {
        const pauseableScheduler = (instance[PauseableRunnable_scheduler] =
            PauseableScheduler.create(scheduler));
        const multicastObs = pipe(obs, Observable.multicast(pauseableScheduler, multicastOptions), Disposable.bindTo(pauseableScheduler));
        init(DelegatingDisposableMixin(), instance, pauseableScheduler);
        init(DelegatingMulticastObservableMixin(), instance, multicastObs);
        return instance;
    }, props({
        [PauseableRunnable_scheduler]: none,
    }), {
        get [PauseableLike_isPaused]() {
            unsafeCast(this);
            return this[PauseableRunnable_scheduler][PauseableLike_isPaused];
        },
        [PauseableLike_pause]() {
            this[PauseableRunnable_scheduler][PauseableLike_pause]();
        },
        [PauseableLike_resume]() {
            this[PauseableRunnable_scheduler][PauseableLike_resume]();
        },
    });
})();
const Flowable_fromRunnable = () => (obs) => ({
    [FlowableLike_flow]: (scheduler, options) => PauseableRunnable_create(obs, scheduler, options),
});
export default Flowable_fromRunnable;
