import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_toPromise: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => PromiseLike<T>;
export { Observable_toPromise as default };
