import { Function1 } from "../../../functions.js";
import { ObservableLike, MulticastObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const ObservableLike__multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
export { ObservableLike__multicast as default };
