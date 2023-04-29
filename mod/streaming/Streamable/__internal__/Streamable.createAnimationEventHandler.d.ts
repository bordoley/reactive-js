import { Function1 } from "../../../functions.js";
import { AnimationConfig } from "../../../rx.js";
import { AnimationEventHandlerLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
interface CreateAnimationEventHandler {
    createAnimationEventHandler<TEventType = unknown, T = number>(animation: Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>, options: {
        readonly mode: "switching";
        readonly concurrency?: number;
    }): AnimationEventHandlerLike<TEventType, T>;
    createAnimationEventHandler<TEventType = unknown, T = number>(animation: Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>, options: {
        readonly mode: "blocking";
        readonly concurrency?: number;
    }): AnimationEventHandlerLike<TEventType, T>;
    createAnimationEventHandler<TEventType = unknown, T = number>(animation: Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>, options: {
        readonly mode: "queueing";
        readonly concurrency?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): AnimationEventHandlerLike<TEventType, T>;
    createAnimationEventHandler<TEventType = unknown, T = number>(animation: Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>): AnimationEventHandlerLike<TEventType, T>;
}
declare const Streamable_createAnimationEventHandler: CreateAnimationEventHandler["createAnimationEventHandler"];
export default Streamable_createAnimationEventHandler;
