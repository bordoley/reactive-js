import type { Animation } from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import { Function1, Optional } from "../../functions.js";
import { DictionaryLike, DisposableLike, EventSourceLike, QueueableLike, QueueableLike_backpressureStrategy, ReadonlyObjectMapLike, SchedulerLike, StreamLike, StreamOf, StreamableLike } from "../../types.js";
export type AnimationGroupEventHandlerLike<TEvent, TKey extends string | number | symbol, T> = StreamableLike<TEvent, boolean, StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>>;
export declare const Streamable_createAnimationGroupEventHandlerStream: <TEvent, TKey extends string | symbol, T>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, Animation<T> | readonly Animation<T>[]> | Animation<T> | readonly Animation<T>[]>, creationOptions: {
    readonly mode: "switching" | "blocking" | "queueing";
    readonly schedule?: SchedulerLike;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}, scheduler: SchedulerLike, streamOptions: Optional<{
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>) => StreamOf<AnimationGroupEventHandlerLike<TEvent, TKey, T>> & DisposableLike;
declare const Streamable_createAnimationGroupEventHandler: Streamable.Signature["createAnimationGroupEventHandler"];
export default Streamable_createAnimationGroupEventHandler;
