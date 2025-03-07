import { ReadonlyObjectMapLike } from "../collections.js";
import * as Streamable from "../computations/Streamable.js";
import { EventSourceLike, PureSynchronousObservableLike } from "../computations.js";
import { Function1, Optional, SideEffect1 } from "../functions.js";
import { SchedulerLike } from "../utils.js";
import { CSSStyleMapLike } from "../web.js";
interface WebEffectsModule {
    __animate(animation: EventSourceLike<CSSStyleMapLike>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => CSSStyleMapLike): SideEffect1<Optional<HTMLElement | null>>;
    __animationFrameScheduler(): SchedulerLike;
    __animation<T>(animation: PureSynchronousObservableLike<T>, options?: {
        animationScheduler: SchedulerLike;
    }): Streamable.AnimationStreamLike<unknown, T>;
    __animation<TEvent, T>(animation: Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>, options?: {
        animationScheduler: SchedulerLike;
    }): Streamable.AnimationStreamLike<TEvent, T>;
    __animationGroup<T, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, PureSynchronousObservableLike<T>>, options?: {
        animationScheduler: SchedulerLike;
    }): Streamable.AnimationGroupStreamLike<unknown, TKey, T>;
    __animationGroup<T, TKey extends string, TEvent>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>>, options?: {
        animationScheduler: SchedulerLike;
    }): Streamable.AnimationGroupStreamLike<TEvent, TKey, T>;
}
type Signature = WebEffectsModule;
export declare const __animate: Signature["__animate"];
export declare const __animation: Signature["__animation"];
export declare const __animationGroup: Signature["__animationGroup"];
export {};
