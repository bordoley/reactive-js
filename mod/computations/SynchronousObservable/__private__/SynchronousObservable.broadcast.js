/// <reference types="./SynchronousObservable.broadcast.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import * as CurrentScheduler from "../../../utils/__internal__/CurrentScheduler.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import { EventListenerLike_notify, PauseableLike_resume, } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import * as Publisher from "../../Publisher.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";
const createPauseableBroadcasterFromSynchronousObservable = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingPauseableMixin, DelegatingBroadcasterMixin()), function PauseableBroadcasterFromSynchronousObservable(obs, options) {
    const scheduler = options?.scheduler ?? CurrentScheduler.get();
    const pauseableScheduler = PauseableScheduler.create(scheduler);
    init(DelegatingDisposableMixin, this, pauseableScheduler);
    init(DelegatingPauseableMixin, this, pauseableScheduler);
    const publisher = pipe(Publisher.create(options), Disposable.addTo(this));
    init(DelegatingBroadcasterMixin(), this, publisher);
    pipe(obs, EventSource.subscribe(bindMethod(publisher, EventListenerLike_notify), {
        scheduler: pauseableScheduler,
    }), Disposable.addTo(this));
    this[PauseableLike_resume]();
    return this;
}))();
const SynchronousObservable_broadcast = ((options) => (observable) => createPauseableBroadcasterFromSynchronousObservable(observable, options));
export default SynchronousObservable_broadcast;
