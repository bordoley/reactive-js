import { Function1 } from "../../../functions.js";
import { ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import { AnimationConfig } from "../../../rx.js";
import { AnimationEventHandlerLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateAnimationEventHandler {
    createAnimationEventHandler<TEvent = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>, options: {
        readonly mode: "switching";
        readonly concurrency?: number;
    }): AnimationEventHandlerLike<TEvent, T, TKey>;
    createAnimationEventHandler<TEvent = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number;
    }): AnimationEventHandlerLike<TEvent, T, TKey>;
    createAnimationEventHandler<TEvent = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationEventHandlerLike<TEvent, T, TKey>;
    createAnimationEventHandler<TEvent = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>): AnimationEventHandlerLike<TEvent, T, TKey>;
}
declare const Streamable_createAnimationEventHandler: CreateAnimationEventHandler["createAnimationEventHandler"];
export default Streamable_createAnimationEventHandler;
