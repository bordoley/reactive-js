import { Function1 } from "../../../functions.js";
import { AnimationEventHandlerLike, Reactive } from "../../../rx.js";
import { DispatcherEventMap, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateAnimationEventHandler {
    createAnimationEventHandler<TEventType extends Exclude<string | symbol, keyof DispatcherEventMap>, T = number>(animation: Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>, options: {
        readonly mode: "switching";
        readonly concurrency?: number;
    }): AnimationEventHandlerLike<TEventType, T>;
    createAnimationEventHandler<TEventType extends Exclude<string | symbol, keyof DispatcherEventMap>, T = number>(animation: Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number;
    }): AnimationEventHandlerLike<TEventType, T>;
    createAnimationEventHandler<TEventType extends Exclude<string | symbol, keyof DispatcherEventMap>, T = number>(animation: Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationEventHandlerLike<TEventType, T>;
    createAnimationEventHandler<TEventType extends Exclude<string | symbol, keyof DispatcherEventMap>, T = number>(animation: Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>): AnimationEventHandlerLike<TEventType, T>;
}
declare const Streamable_createAnimationEventHandler: CreateAnimationEventHandler["createAnimationEventHandler"];
export default Streamable_createAnimationEventHandler;
