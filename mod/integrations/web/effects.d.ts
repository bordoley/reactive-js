import { Optional, SideEffect1 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../keyed-containers.js";
import { EventSourceLike } from "../../util.js";
import { CSSStyleKey } from "../web.js";
interface Animate {
    __animate(animation: EventSourceLike<ReadonlyObjectMapLike<CSSStyleKey, string>>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => ReadonlyObjectMapLike<CSSStyleKey, string>): SideEffect1<Optional<HTMLElement | null>>;
}
export declare const __animate: Animate["__animate"];
interface AnimateEvent {
    __animateEvent(animation: EventSourceLike<{
        type: unknown;
        value: ReadonlyObjectMapLike<CSSStyleKey, string>;
    }>): SideEffect1<Optional<HTMLElement | null>>;
    __animateEvent<TEventType, T>(animation: EventSourceLike<{
        type: TEventType;
        value: T;
    }>, selector: (ev: {
        type: TEventType;
        value: T;
    }) => ReadonlyObjectMapLike<CSSStyleKey, string>): SideEffect1<Optional<HTMLElement | null>>;
}
export declare const __animateEvent: AnimateEvent["__animateEvent"];
export {};
