import { BroadcasterLike, StoreLike } from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
import { DOMEventTarget, EventKeysOf, EventMapOf, Rect, ScrollValue } from "../web.js";
/**
 * @noInheritDoc
 */
export interface WebElementModule {
    addEventHandler<TEventTarget extends DOMEventTarget, TEventName extends EventKeysOf<TEventTarget>>(eventName: TEventName, eventHandler: SideEffect1<EventMapOf<TEventTarget>[TEventName]>, options?: {
        passive?: boolean;
        capture?: boolean;
    }): Function1<TEventTarget, DisposableLike>;
    addResizeHandler<TElement extends Element>(handler: SideEffect1<ResizeObserverEntry>, options?: ResizeObserverOptions): Function1<TElement, DisposableLike>;
    addScrollHandler<TElement extends HTMLElement>(handler: SideEffect1<ScrollValue>): Function1<TElement, DisposableLike>;
    eventSource<TEventTarget extends DOMEventTarget, TEventName extends EventKeysOf<TEventTarget>>(eventName: TEventName, options?: {
        passive?: boolean;
        capture?: boolean;
        autoDispose?: boolean;
    }): Function1<TEventTarget, BroadcasterLike<EventMapOf<TEventTarget>[TEventName]> & DisposableLike>;
    intersectionEventSource(parent?: Document | Element): Function1<Element, BroadcasterLike<IntersectionObserverEntry>>;
    measure<TElement extends HTMLElement | SVGElement>(): Function1<TElement, StoreLike<Rect>>;
    resizeEventSource<TElement extends Element>(options?: ResizeObserverOptions): Function1<TElement, BroadcasterLike<ResizeObserverEntry>>;
    scrollEventSource<TElement extends HTMLElement>(): Function1<TElement, BroadcasterLike<ScrollValue>>;
}
export type Signature = WebElementModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const addResizeHandler: Signature["addResizeHandler"];
export declare const eventSource: Signature["eventSource"];
export declare const intersectionEventSource: Signature["intersectionEventSource"];
export declare const resizeEventSource: Signature["resizeEventSource"];
