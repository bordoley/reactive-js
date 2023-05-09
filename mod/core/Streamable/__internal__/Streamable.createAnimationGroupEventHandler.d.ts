import { DictionaryLike, EventSourceLike, QueueableLike, QueueableLike_backpressureStrategy, ReadonlyObjectMapLike, RunnableObservableContainers, SchedulerLike, StreamLike, StreamableLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
type AnimationGroupEventHandlerLike<TEvent, TKey extends string | number | symbol, T> = StreamableLike<TEvent, boolean, StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
interface CreateAnimationGroupEventHandler {
    createAnimationGroupEventHandler<TEvent, TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, RunnableObservableContainers.AnimationConfig<T> | readonly RunnableObservableContainers.AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<TEvent, TKey, T>;
    createAnimationGroupEventHandler<TEvent, TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, RunnableObservableContainers.AnimationConfig<T> | readonly RunnableObservableContainers.AnimationConfig<T>[]>>, options: {
        readonly mode: "blocking";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<TEvent, TKey, T>;
    createAnimationGroupEventHandler<TEvent, TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, RunnableObservableContainers.AnimationConfig<T> | readonly RunnableObservableContainers.AnimationConfig<T>[]>>, options: {
        readonly mode: "queueing";
        readonly scheduler?: SchedulerLike;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationGroupEventHandlerLike<TEvent, TKey, T>;
    createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, RunnableObservableContainers.AnimationConfig<T> | readonly RunnableObservableContainers.AnimationConfig<T>[]>, options: {
        readonly mode: "switching";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<void, TKey, T>;
    createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, RunnableObservableContainers.AnimationConfig<T> | readonly RunnableObservableContainers.AnimationConfig<T>[]>, options: {
        readonly mode: "blocking";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<void, TKey, T>;
    createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, RunnableObservableContainers.AnimationConfig<T> | readonly RunnableObservableContainers.AnimationConfig<T>[]>, options: {
        readonly mode: "queueing";
        readonly scheduler?: SchedulerLike;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationGroupEventHandlerLike<void, TKey, T>;
}
declare const Streamable_createAnimationGroupEventHandler: CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"];
export default Streamable_createAnimationGroupEventHandler;
