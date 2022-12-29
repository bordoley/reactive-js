import { Function1 } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
export { subscribe as default };
