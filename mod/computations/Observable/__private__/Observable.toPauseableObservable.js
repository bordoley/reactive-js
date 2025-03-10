/// <reference types="./Observable.toPauseableObservable.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
import Observable_multicast from "./Observable.multicast.js";
const Observable_toPauseableObservable = 
/*@__PURE__*/ (() => {
    const createPauseableSynchronousObservable = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingMulticastObservableMixin(), DelegatingPauseableMixin), function PauseableSynchronousObservable(obs, scheduler, multicastOptions) {
        const pauseableScheduler = PauseableScheduler.create(scheduler);
        init(DelegatingDisposableMixin, this, pauseableScheduler);
        init(DelegatingPauseableMixin, this, pauseableScheduler);
        const multicastObs = pipe(obs, Observable_multicast(pauseableScheduler, multicastOptions), Disposable.bindTo(this));
        init(DelegatingMulticastObservableMixin(), this, multicastObs);
        return this;
    });
    return (scheduler, options) => (obs) => createPauseableSynchronousObservable(obs, scheduler, options);
})();
export default Observable_toPauseableObservable;
