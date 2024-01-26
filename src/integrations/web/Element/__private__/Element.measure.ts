import { Array_every } from "../../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../../collections/ReadonlyArray.js";
import { StoreLike_value } from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import * as WritableStore from "../../../../events/WritableStore.js";
import { isNull, pipe, pipeLazy } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import { Rect } from "../../../web.js";
import type * as Element from "../../Element.js";
import Element_eventSource from "./Element.eventSource.js";
import Element_windowResizeEventSource from "./Element.windowResizeEventSource.js";
import Element_windowScrollEventSource from "./Element.windowScrollEventSource.js";

const keys: (keyof Rect)[] = [
  "x",
  "y",
  "top",
  "bottom",
  "left",
  "right",
  "width",
  "height",
];
const areBoundsEqual = (a: Rect, b: Rect) =>
  keys[Array_every](key => a[key] === b[key]);

const findScrollContainers = (
  element: HTMLElement | SVGElement,
): (HTMLElement | SVGElement)[] => {
  const { overflow, overflowX, overflowY } = window.getComputedStyle(element);

  const { body } = document;

  const result =
    element !== body &&
    [overflow, overflowX, overflowY].some(
      prop => prop === "auto" || prop === "scroll",
    )
      ? [element]
      : [];

  return element !== body && !isNull(element.parentElement)
    ? [...result, ...findScrollContainers(element.parentElement)]
    : result;
};

const measureElement = (element: HTMLElement | SVGElement): Rect => {
  const { left, top, width, height, bottom, right, x, y }: DOMRect =
    element.getBoundingClientRect();

  /**
   * if (state.current.element instanceof HTMLElement && offsetSize) {
   *   size.height = state.current.element.offsetHeight
   *   size.width = state.current.element.offsetWidth
   * }
   */

  return {
    left,
    top,
    width,
    height,
    bottom,
    right,
    x,
    y,
  };
};

const Element_measure: Element.Signature["measure"] =
  () => (element: HTMLElement | SVGElement) => {
    const store = WritableStore.create(measureElement(element), {
      equality: areBoundsEqual,
    });

    const windowResizeEventSource = Element_windowResizeEventSource();
    const windowScrollEventSource = Element_windowScrollEventSource();
    const scrollContainerEventSources = pipe(
      findScrollContainers(element),
      ReadonlyArray.map(Element_eventSource("scroll")),
    );

    pipe(
      EventSource.mergeMany([
        windowResizeEventSource,
        windowScrollEventSource,
        ...scrollContainerEventSources,
      ]),
      EventSource.map(pipeLazy(element, measureElement)),
      EventSource.addEventHandler<Rect>(rect => {
        store[StoreLike_value] = rect;
      }),
      Disposable.bindTo(store),
    );

    return store;
  };

export default Element_measure;
