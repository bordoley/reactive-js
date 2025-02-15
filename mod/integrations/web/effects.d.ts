import { ReadonlyObjectMapLike } from "../../collections.js";
import { AnimationGroupStreamLike, AnimationStreamLike, PureRunnableLike, SchedulerLike } from "../../concurrent.js";
import { EventSourceLike } from "../../events.js";
import { Function1, Optional, SideEffect1 } from "../../functions.js";
import { CSSStyleMapLike } from "../web.js";
interface WebEffectsModule {
    __animate(animation: EventSourceLike<CSSStyleMapLike>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => CSSStyleMapLike): SideEffect1<Optional<HTMLElement | null>>;
    __animationFrameScheduler(): SchedulerLike;
    __animation<T>(animation: PureRunnableLike<T>, options?: {
        animationScheduler: SchedulerLike;
    }): AnimationStreamLike<unknown, T>;
    __animation<TEvent, T>(animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>, options?: {
        animationScheduler: SchedulerLike;
    }): AnimationStreamLike<TEvent, T>;
    __animationGroup<T, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, PureRunnableLike<T>>, options?: {
        animationScheduler: SchedulerLike;
    }): AnimationGroupStreamLike<unknown, TKey, T>;
    __animationGroup<T, TKey extends string, TEvent>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>>, options?: {
        animationScheduler: SchedulerLike;
    }): AnimationGroupStreamLike<TEvent, TKey, T>;
}
type Signature = WebEffectsModule;
export declare const __animate: Signature["__animate"];
export declare const __animation: Signature["__animation"];
export declare const __animationGroup: Signature["__animationGroup"];
export {};
