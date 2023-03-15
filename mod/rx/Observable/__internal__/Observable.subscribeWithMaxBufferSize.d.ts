import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Observable_subscribeWithMaxBufferSize: <T>(scheduler: SchedulerLike, maxBufferSize: number) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribeWithMaxBufferSize;
