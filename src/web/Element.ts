import { EventSourceLike, StoreLike } from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
import {
  DOMEventTarget,
  EventKeysOf,
  EventMapOf,
  Rect,
  ScrollValue,
} from "../web.js";
import Element_addEventHandler from "./Element/__private__/Element.addEventHandler.js";
import Element_addResizeHandler from "./Element/__private__/Element.addResizeHandler.js";
import Element_addScrollHandler from "./Element/__private__/Element.addScrollHandler.js";
import Element_eventSource from "./Element/__private__/Element.eventSource.js";
import Element_intersectionEventSource from "./Element/__private__/Element.intersectionEventSource.js";
import Element_measure from "./Element/__private__/Element.measure.js";
import Element_resizeEventSource from "./Element/__private__/Element.resizeEventSource.js";
import Element_scrollEventSource from "./Element/__private__/Element.scrollEventSource.js";

/**
 * @noInheritDoc
 */
export interface WebElementModule {
  addEventHandler<
    TEventTarget extends DOMEventTarget,
    TEventName extends EventKeysOf<TEventTarget>,
  >(
    eventName: TEventName,
    eventHandler: SideEffect1<EventMapOf<TEventTarget>[TEventName]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;

  addResizeHandler<TElement extends Element>(
    handler: SideEffect1<ResizeObserverEntry>,
    options?: ResizeObserverOptions,
  ): Function1<TElement, DisposableLike>;

  addScrollHandler<TElement extends HTMLElement>(
    handler: SideEffect1<ScrollValue>,
  ): Function1<TElement, DisposableLike>;

  eventSource<
    TEventTarget extends DOMEventTarget,
    TEventName extends EventKeysOf<TEventTarget>,
  >(
    eventName: TEventName,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<
    TEventTarget,
    EventSourceLike<EventMapOf<TEventTarget>[TEventName]>
  >;

  intersectionEventSource(
    parent?: Document | Element,
  ): Function1<Element, EventSourceLike<IntersectionObserverEntry>>;

  measure<TElement extends HTMLElement | SVGElement>(options?: {
    autoDispose?: boolean;
  }): Function1<TElement, StoreLike<Rect> & DisposableLike>;

  resizeEventSource<TElement extends Element>(
    options?: ResizeObserverOptions,
  ): Function1<TElement, EventSourceLike<ResizeObserverEntry>>;

  scrollEventSource<TElement extends HTMLElement>(): Function1<
    TElement,
    EventSourceLike<ScrollValue>
  >;
}

export type Signature = WebElementModule;

export const addEventHandler: Signature["addEventHandler"] =
  Element_addEventHandler;
export const addResizeHandler: Signature["addResizeHandler"] =
  Element_addResizeHandler;
export const addScrollHandler: Signature["addScrollHandler"] =
  Element_addScrollHandler;
export const eventSource: Signature["eventSource"] =
  Element_eventSource as Signature["eventSource"];
export const intersectionEventSource: Signature["intersectionEventSource"] =
  Element_intersectionEventSource;
export const measure: Signature["measure"] = Element_measure;
export const resizeEventSource: Signature["resizeEventSource"] =
  Element_resizeEventSource;
export const scrollEventSource: Signature["scrollEventSource"] =
  Element_scrollEventSource;
