import Observer_getDispatcher from "./Observer/__internal__/Observer.getDispatcher.js";
import Observer_getScheduler from "./Observer/__internal__/Observer.getScheduler.js";
import Observer_notify from "./Observer/__internal__/Observer.notify.js";
import Observer_notifySink from "./Observer/__internal__/Observer.notifySink.js";
import Observer_schedule from "./Observer/__internal__/Observer.schedule.js";
import Observer_sourceFrom from "./Observer/__internal__/Observer.sourceFrom.js";

export const getDispatcher = Observer_getDispatcher;
export const getScheduler = Observer_getScheduler;
export const notify = Observer_notify;
export const notifyObserver = Observer_notifySink;
export const schedule = Observer_schedule;
export const sourceFrom = Observer_sourceFrom;
