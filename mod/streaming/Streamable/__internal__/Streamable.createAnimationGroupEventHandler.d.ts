import { Function1 } from "../../../functions.js";
import { ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import { AnimationConfig } from "../../../rx.js";
import { AnimationGroupEventHandlerLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateAnimationGroupEventHandler {
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>>, options: {
        readonly mode: "switching";
        readonly concurrency?: number;
    }): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number;
    }): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
    createAnimationGroupEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>>): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
}
declare const Streamable_createAnimationGroupEventHandler: CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"];
export default Streamable_createAnimationGroupEventHandler;
