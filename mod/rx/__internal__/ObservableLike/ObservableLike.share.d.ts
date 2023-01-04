import { Function1 } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
declare const ObservableLike__share: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;
export { ObservableLike__share as default };
