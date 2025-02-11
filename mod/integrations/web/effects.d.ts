import { ReadonlyObjectMapLike } from "../../collections.js";
import { AnimationGroupStreamLike, AnimationStreamLike, PureRunnableLike, SchedulerLike } from "../../concurrent.js";
import { EventSourceLike } from "../../events.js";
import { Function1, Optional, SideEffect1 } from "../../functions.js";
import { CSSStyleMapLike } from "../web.js";
interface WebEffectsModule {
    __animate(animation: EventSourceLike<CSSStyleMapLike>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => CSSStyleMapLike): SideEffect1<Optional<HTMLElement | null>>;
    __animationFrameScheduler(): SchedulerLike;
    __animation<T, TEvent = unknown>(animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>, options?: {
        animationScheduler: SchedulerLike;
    }): AnimationStreamLike<T, TEvent>;
    __animationGroup<T, TEvent = unknown, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>>, options?: {
        animationScheduler: SchedulerLike;
    }): AnimationGroupStreamLike<T, TEvent, TKey>;
}
type Signature = WebEffectsModule;
export declare const __animate: Signature["__animate"];
export declare const __animation: Signature["__animation"];
export declare const __animationGroup: Signature["__animationGroup"];
export {};
