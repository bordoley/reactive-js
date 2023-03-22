import { Factory, Function1 } from "../../../functions.js";
import { MulticastObservableLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observable_multicast: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>, options?: {
    readonly replay?: number;
    readonly maxBufferSize?: number;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
export default Observable_multicast;
