import { Optional } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_firstAsync: <T>(options?: {
    scheduler?: SchedulerLike;
    maxBufferSize?: number;
}) => (observable: ObservableLike<T>) => Promise<Optional<T>>;
export default Observable_firstAsync;
