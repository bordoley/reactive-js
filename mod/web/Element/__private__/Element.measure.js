/// <reference types="./Element.measure.d.ts" />

import { Array_every } from "../../../__internal__/constants.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Broadcaster from "../../../computations/Broadcaster.js";
import * as WritableStore from "../../../computations/WritableStore.js";
import { SourceLike_subscribe, } from "../../../computations.js";
import { invoke, isNull, newInstance, pipe, pipeLazy, returns, } from "../../../functions.js";
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
const areBoundsEqual = (a, b) => keys[Array_every](key => a[key] === b[key]);
const findScrollContainers = (element) => {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(element);
    const { body } = document;
    const result = element !== body &&
        [overflow, overflowX, overflowY].some(prop => prop === "auto" || prop === "scroll")
        ? [element]
        : [];
    return element !== body && !isNull(element.parentElement)
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
const Element_measure = /*@__PURE__*/ (() => {
    const measureStoreCache = newInstance(WeakMap);
    return returns((element) => measureStoreCache.get(element) ??
        (() => {
            const store = WritableStore.create(measureElement(element), {
                equality: areBoundsEqual,
                autoDispose: true,
            });
            measureStoreCache.set(element, store);
            const windowResizeEventSource = Element_windowResizeEventSource();
            const windowScrollEventSource = Element_windowScrollEventSource();
            const scrollContainerEventSources = pipe(findScrollContainers(element), ReadonlyArray.map(Element_eventSource("scroll", {
                autoDispose: true,
            })));
            pipe(Broadcaster.merge(windowResizeEventSource, windowScrollEventSource, ...scrollContainerEventSources), Broadcaster.map(pipeLazy(element, measureElement)), invoke(SourceLike_subscribe, store));
            return store;
        })());
})();
export default Element_measure;
