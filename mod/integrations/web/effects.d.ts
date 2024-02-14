import { DictionaryLike, ReadonlyObjectMapLike } from "../../collections.js";
import { PureRunnableLike, StreamLike } from "../../concurrent.js";
import { EventSourceLike } from "../../events.js";
import { Function1, Optional, SideEffect1 } from "../../functions.js";
import { BackpressureStrategy } from "../../utils.js";
import { CSSStyleMapLike } from "../web.js";
interface WebEffectsModule {
    __animate(animation: EventSourceLike<CSSStyleMapLike>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => CSSStyleMapLike): SideEffect1<Optional<HTMLElement | null>>;
    __animationGroup<T, TEvent = unknown, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>>, options?: {
        readonly mode: "switching";
    } | {
        readonly mode: "blocking";
    } | {
        readonly mode: "queueing";
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>;
}
type Signature = WebEffectsModule;
export declare const __animate: Signature["__animate"];
export declare const __animationGroup: Signature["__animationGroup"];
export {};
