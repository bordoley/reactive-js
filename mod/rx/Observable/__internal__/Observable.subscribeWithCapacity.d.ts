import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Observable_subscribeWithCapacity: <T>(scheduler: SchedulerLike, capacity: number) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribeWithCapacity;
