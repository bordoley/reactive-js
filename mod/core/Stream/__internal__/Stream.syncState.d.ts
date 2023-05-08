import { DisposableLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, StreamLike } from "../../../core.js";
import { Function1, Updater } from "../../../functions.js";
declare const Stream_syncState: <T>(onInit: (initialValue: T) => ObservableLike<Updater<T>>, onChange: (oldValue: T, newValue: T) => ObservableLike<Updater<T>>, options?: {
    readonly throttleDuration?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly scheduler: SchedulerLike;
}) => Function1<StreamLike<Updater<T>, T>, DisposableLike>;
export default Stream_syncState;
