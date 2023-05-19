/// <reference types="./Observable.toEventSource.d.ts" />

import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import Scheduler_createHostScheduler from "../../Scheduler/__internal__/Scheduler.createHostScheduler.js";
import { bindMethod, identity, isFunction, isNone, isSome, none, pipe, } from "../../functions.js";
import { SinkLike_notify, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_toEventSource = (schedulerOrNone, options) => (obs) => {
    const schedulerOrFactory = isNone(schedulerOrNone)
        ? Scheduler_createHostScheduler
        : none;
    const isSchedulerFactory = isFunction(schedulerOrFactory);
    const schedulerDisposable = isSchedulerFactory
        ? schedulerOrFactory()
        : none;
    const scheduler = schedulerDisposable ?? schedulerOrNone;
    return EventSource_create(listener => pipe(obs, Observable_forEach(bindMethod(listener, SinkLike_notify)), Observable_subscribe(scheduler, options), Disposable_bindTo(listener), isSome(schedulerDisposable)
        ? Disposable_add(schedulerDisposable)
        : identity));
};
export default Observable_toEventSource;
