import { Function1 } from "../../../functions.mjs";
import { ObservableLike, MulticastObservableLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
export { multicast as default };
