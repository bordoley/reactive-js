import { Function1, Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Stream_syncState: <T>(onInit: (initialValue: T) => ObservableLike<Updater<T>>, onChange: (oldValue: T, newValue: T) => ObservableLike<Updater<T>>, options?: {
    readonly throttleDuration?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly scheduler: SchedulerLike;
}) => Function1<StreamLike<Updater<T>, T>, StreamLike<Updater<T>, T>>;
export default Stream_syncState;
