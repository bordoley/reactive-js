import { Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_subscribeOn: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>, options?: {
    readonly maxBufferSize?: number;
}) => (observable: ObservableLike<T>) => ObservableLike<T>;
export default Observable_subscribeOn;
