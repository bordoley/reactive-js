import Observer_getDispatcher from "./Observer/__internal__/Observer.getDispatcher";
import Observer_getScheduler from "./Observer/__internal__/Observer.getScheduler";
import Observer_schedule from "./Observer/__internal__/Observer.schedule";

export const getDispatcher = Observer_getDispatcher;
export const getScheduler = Observer_getScheduler;
export const schedule = Observer_schedule;

/** @ignore */
const Observer = {
  getDispatcher,
  getScheduler,
  schedule,
};

export default Observer;
