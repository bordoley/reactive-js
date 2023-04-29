import { Function1 } from "../../../functions.js";
import { ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import { AnimationConfig } from "../../../rx.js";
import { AnimationsEventHandlerLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateAnimationsEventHandler {
    createAnimationsEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>, options: {
        readonly mode: "switching";
        readonly concurrency?: number;
    }): AnimationsEventHandlerLike<TEventType, T, TKey>;
    createAnimationsEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number;
    }): AnimationsEventHandlerLike<TEventType, T, TKey>;
    createAnimationsEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationsEventHandlerLike<TEventType, T, TKey>;
    createAnimationsEventHandler<TEventType = unknown, T = number, TKey extends string | symbol | number = string>(animations: ReadonlyObjectMapLike<Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>, TKey>): AnimationsEventHandlerLike<TEventType, T, TKey>;
}
declare const Streamable_createAnimationsEventHandler: CreateAnimationsEventHandler["createAnimationsEventHandler"];
export default Streamable_createAnimationsEventHandler;
