import { ObservableLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
declare const ObservableLike__subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
export { ObservableLike__subscribeOn as default };
