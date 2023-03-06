import { Updater } from "../../../functions.js";
import { PauseableState, SchedulerLike } from "../../../scheduling.js";
import { AsyncEnumerableLike, FlowableLike, StreamLike, StreamableLike } from "../../../streaming.js";
interface StreamableCreate {
    <T>(stream: (scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }) => StreamLike<void, T>, isInteractive: true, isEnumerable: boolean, isRunnable: boolean): AsyncEnumerableLike<T>;
    <T>(stream: (scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }) => StreamLike<Updater<PauseableState>, T>, isInteractive: false, isEnumerable: boolean, isRunnable: boolean): FlowableLike<T>;
    <TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(stream: (scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }) => TStream, isInteractive: boolean, isEnumerable: boolean, isRunnable: boolean): StreamableLike<TReq, T, TStream>;
}
declare const Streamable_create: StreamableCreate;
export default Streamable_create;
