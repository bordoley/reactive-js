import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Observable_subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
export { Observable_subscribe as default };
