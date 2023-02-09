import Observer_getDispatcher from "./__internal__/Observer/Observer.getDispatcher";
import Observer_getScheduler from "./__internal__/Observer/Observer.getScheduler";
import Observer_schedule from "./__internal__/Observer/Observer.schedule";

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
