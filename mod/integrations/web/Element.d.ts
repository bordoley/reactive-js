import { EventSourceLike, StoreLike } from "../../computations.js";
import { Function1, SideEffect1 } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
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
    }): Function1<TEventTarget, EventSourceLike<EventMapOf<TEventTarget>[TEventName]>>;
    intersectionEventSource(parent?: Document | Element): Function1<Element, EventSourceLike<IntersectionObserverEntry>>;
    measure<TElement extends HTMLElement | SVGElement>(options?: {
        autoDispose?: boolean;
    }): Function1<TElement, StoreLike<Rect> & DisposableLike>;
    resizeEventSource<TElement extends Element>(options?: ResizeObserverOptions): Function1<TElement, EventSourceLike<ResizeObserverEntry>>;
    scrollEventSource<TElement extends HTMLElement>(): Function1<TElement, EventSourceLike<ScrollValue>>;
}
export type Signature = WebElementModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const addResizeHandler: Signature["addResizeHandler"];
export declare const addScrollHandler: Signature["addScrollHandler"];
export declare const eventSource: Signature["eventSource"];
export declare const intersectionEventSource: Signature["intersectionEventSource"];
export declare const measure: Signature["measure"];
export declare const resizeEventSource: Signature["resizeEventSource"];
export declare const scrollEventSource: Signature["scrollEventSource"];
