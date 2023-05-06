import { DictionaryLike, ReadonlyObjectMapLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { Reactive, StreamLike, StreamableLike } from "../../../rx.js";
import { EventSourceLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
type AnimationGroupEventHandlerLike<TEventType, TKey extends string | number | symbol, T> = StreamableLike<TEventType, boolean, StreamLike<TEventType, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
interface CreateAnimationGroupEventHandler {
    createAnimationGroupEventHandler<TEventType, TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<TEventType, TKey, T>;
    createAnimationGroupEventHandler<TEventType, TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>>, options: {
        readonly mode: "blocking";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<TEventType, TKey, T>;
    createAnimationGroupEventHandler<TEventType, TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>>, options: {
        readonly mode: "queueing";
        readonly scheduler?: SchedulerLike;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationGroupEventHandlerLike<TEventType, TKey, T>;
    createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>, options: {
        readonly mode: "switching";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<void, TKey, T>;
    createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>, options: {
        readonly mode: "blocking";
        readonly scheduler?: SchedulerLike;
    }): AnimationGroupEventHandlerLike<void, TKey, T>;
    createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(animationGroup: ReadonlyObjectMapLike<TKey, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>, options: {
        readonly mode: "queueing";
        readonly scheduler?: SchedulerLike;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationGroupEventHandlerLike<void, TKey, T>;
}
declare const Streamable_createAnimationGroupEventHandler: CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"];
export default Streamable_createAnimationGroupEventHandler;
