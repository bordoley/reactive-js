/// <reference types="./Element.measure.d.ts" />

import * as ReadonlyArray from "../../../../collections/ReadonlyArray.js";
import { StoreLike_value } from "../../../../events.js";
import * as EventSource from "../../../../events/EventSource.js";
import * as WritableStore from "../../../../events/WritableStore.js";
import { pipe, pipeLazy } from "../../../../functions.js";
import * as Disposable from "../../../../utils/Disposable.js";
import Element_eventSource from "./Element.eventSource.js";
import Element_windowResizeEventSource from "./Element.windowResizeEventSource.js";
import Element_windowScrollEventSource from "./Element.windowScrollEventSource.js";
const keys = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height",
];
const areBoundsEqual = (a, b) => keys.every(key => a[key] === b[key]);
const findScrollContainers = (element) => {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(element);
    const result = element !== document.body &&
        [overflow, overflowX, overflowY].some(prop => prop === "auto" || prop === "scroll")
        ? [element]
        : [];
    return element !== document.body && element.parentElement != null
        ? [...result, ...findScrollContainers(element.parentElement)]
        : result;
};
const measureElement = (element) => {
    const { left, top, width, height, bottom, right, x, y } = element.getBoundingClientRect();
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
const Element_measure = () => (element) => {
    const store = WritableStore.create(measureElement(element));
    const windowResizeEventSource = Element_windowResizeEventSource();
    const windowScrollEventSource = Element_windowScrollEventSource();
    const scrollContainerEventSources = pipe(findScrollContainers(element), ReadonlyArray.map(Element_eventSource("scroll")));
    pipe(EventSource.mergeMany([
        windowResizeEventSource,
        windowScrollEventSource,
        ...scrollContainerEventSources,
    ]), EventSource.map(pipeLazy(element, measureElement)), EventSource.distinctUntilChanged({ equality: areBoundsEqual }), EventSource.addEventHandler(rect => {
        store[StoreLike_value] = rect;
    }), Disposable.bindTo(store));
    return store;
};
export default Element_measure;
