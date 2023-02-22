import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
export default Observable_subscribeOn;
