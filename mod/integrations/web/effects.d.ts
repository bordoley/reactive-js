import { ReadonlyObjectMapLike } from "../../containers.js";
import { Optional, SideEffect1 } from "../../functions.js";
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
    __animateEvent<TEvent extends {
        type: TEventType;
        value: ReadonlyObjectMapLike<CSSStyleKey, string>;
    }, TEventType extends string | symbol>(animation: EventSourceLike<TEvent>): SideEffect1<Optional<HTMLElement | null>>;
    __animateEvent<TEvent extends {
        type: TEventType;
        value: ReadonlyObjectMapLike<CSSStyleKey, string>;
    }, TEventType extends string | symbol, T>(animation: EventSourceLike<TEvent>, selector: (ev: {
        type: TEventType;
        value: T;
    }) => ReadonlyObjectMapLike<CSSStyleKey, string>): SideEffect1<Optional<HTMLElement | null>>;
}
export declare const __animateEvent: AnimateEvent["__animateEvent"];
export {};
