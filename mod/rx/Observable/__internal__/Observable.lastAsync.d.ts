import { Optional } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_lastAsync: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => PromiseLike<Optional<T>>;
export default Observable_lastAsync;
