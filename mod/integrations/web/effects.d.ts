import { Optional, SideEffect1 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../keyed-containers.js";
import { EventSourceLike } from "../../util.js";
import { CSSStyleKey } from "../web.js";
interface Animate {
    __animate(animation: EventSourceLike<ReadonlyObjectMapLike<string, CSSStyleKey>>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => ReadonlyObjectMapLike<string, CSSStyleKey>): SideEffect1<Optional<HTMLElement | null>>;
}
export declare const __animate: Animate["__animate"];
interface AnimateEvent {
    __animateEvent(animation: EventSourceLike<{
        event: unknown;
        value: ReadonlyObjectMapLike<string, CSSStyleKey>;
    }>): SideEffect1<Optional<HTMLElement | null>>;
    __animateEvent<TEvent, T>(animation: EventSourceLike<{
        event: TEvent;
        value: T;
    }>, selector: (ev: {
        event: TEvent;
        value: T;
    }) => ReadonlyObjectMapLike<string, CSSStyleKey>): SideEffect1<Optional<HTMLElement | null>>;
}
export declare const __animateEvent: AnimateEvent["__animateEvent"];
export {};
