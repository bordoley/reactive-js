import { Factory, Function1 } from "../../functions.js";
import { DeferredObservableLike, DisposableLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, SharedObservableLike } from "../../types.js";
interface ObservableSubscribeOn {
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<DeferredObservableLike<T>, DeferredObservableLike<T>>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<SharedObservableLike<T>, SharedObservableLike<T>>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, ObservableLike<T>>;
}
declare const Observable_subscribeOn: ObservableSubscribeOn["subscribeOn"];
export default Observable_subscribeOn;
