import { Array_every } from "../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as EventSource from "../../../computations/EventSource.js";
import * as WritableStore from "../../../computations/WritableStore.js";
import { EventSourceLike_addEventListener } from "../../../computations.js";
import { invoke, isNull, pipe, pipeLazy } from "../../../functions.js";
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
  options => (element: HTMLElement | SVGElement) => {
    const store = WritableStore.create(measureElement(element), {
      equality: areBoundsEqual,
      ...(options ?? {}),
    });

    const windowResizeEventSource = Element_windowResizeEventSource();
    const windowScrollEventSource = Element_windowScrollEventSource();
    const scrollContainerEventSources = pipe(
      findScrollContainers(element),
      ReadonlyArray.map(
        Element_eventSource<HTMLElement | SVGElement, "scroll">("scroll"),
      ),
    );

    pipe(
      EventSource.merge(
        windowResizeEventSource,
        windowScrollEventSource,
        ...scrollContainerEventSources,
      ),
      EventSource.map(pipeLazy(element, measureElement)),
      invoke(EventSourceLike_addEventListener, store),
    );

    return store;
  };

export default Element_measure;
