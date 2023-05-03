import { ReadonlyObjectMapLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { AnimationGroupEventHandlerLike, Reactive } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateAnimationGroupEventHandler {
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
    }): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>>, options: {
        readonly mode: "blocking";
    }): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>>, options: {
        readonly mode: "queueing";
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]>>): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
}
declare const Streamable_createAnimationGroupEventHandler: CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"];
export default Streamable_createAnimationGroupEventHandler;
