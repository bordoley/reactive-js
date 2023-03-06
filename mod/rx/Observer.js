/// <reference types="./Observer.d.ts" />

import Observer_notify from "./Observer/__internal__/Observer.notify.js";
import Observer_notifyObserver from "./Observer/__internal__/Observer.notifyObserver.js";
import Observer_schedule from "./Observer/__internal__/Observer.schedule.js";
import Observer_sourceFrom from "./Observer/__internal__/Observer.sourceFrom.js";
export const notify = Observer_notify;
export const notifyObserver = Observer_notifyObserver;
export const schedule = Observer_schedule;
export const sourceFrom = Observer_sourceFrom;
