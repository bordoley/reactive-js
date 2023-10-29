/// <reference types="./Observable.toEventSource.d.ts" />

import * as EventSource from "../../../events/EventSource.js";
import { bindMethod, identity, isFunction, isNone, isSome, none, pipe, } from "../../../functions.js";
import { SinkLike_notify, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Scheduler_createHostScheduler from "../../Scheduler/__internal__/Scheduler.createHostScheduler.js";
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
    return EventSource.create(listener => pipe(obs, Observable_forEach(bindMethod(listener, SinkLike_notify)), Observable_subscribe(scheduler, options), Disposable.bindTo(listener), isSome(schedulerDisposable)
        ? Disposable.add(schedulerDisposable)
        : identity));
};
export default Observable_toEventSource;
