/// <reference types="./Observable.toEventSource.d.ts" />

import { SinkLike_notify } from "../../../events.js";
import * as EventSource from "../../../events/EventSource.js";
import { bindMethod, identity, isFunction, isNone, isSome, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Scheduler from "../../Scheduler.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_toEventSource = (schedulerOrNone, options) => (obs) => {
    const schedulerOrFactory = isNone(schedulerOrNone)
        ? Scheduler.createHostScheduler
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
