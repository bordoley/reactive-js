import Observer_getDispatcher from "./Observer/__internal__/Observer.getDispatcher.js";
import Observer_getScheduler from "./Observer/__internal__/Observer.getScheduler.js";
import Observer_schedule from "./Observer/__internal__/Observer.schedule.js";
import Sink_notify from "./Sink/__internal__/Sink.notify.js";
import Sink_notifySink from "./Sink/__internal__/Sink.notifySink.js";
import Sink_sourceFrom from "./Sink/__internal__/Sink.sourceFrom.js";

export const getDispatcher = Observer_getDispatcher;
export const getScheduler = Observer_getScheduler;
export const notify = Sink_notify;
export const notifyObserver = Sink_notifySink;
export const schedule = Observer_schedule;
export const sourceFrom = Sink_sourceFrom;
