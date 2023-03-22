import { Factory, Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_share: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>, options?: {
    readonly replay?: number;
    readonly maxBufferSize?: number;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;
export default Observable_share;
