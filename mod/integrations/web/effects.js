/// <reference types="./effects.d.ts" />

import ReadonlyObjectMap_forEach from "../../collections/ReadonlyObjectMap/__private__/ReadonlyObjectMap.forEach.js";
import { __constant, __memo, __observe, __state, __using, } from "../../concurrent/Observable/effects.js";
import * as EventSource from "../../events/EventSource.js";
import { compose, identity, none, pipe, returns, } from "../../functions.js";
import { QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
const returnsNone = returns(none);
const makeRefSetter = (dispatcher) => ele => dispatcher[QueueableLike_enqueue](returns(ele));
const animateHtmlElement = (element, animation, selector) => 
// Just in case a caller sets it to null instead of undefined
element != null
    ? pipe(animation, EventSource.addEventHandler(compose(selector, ReadonlyObjectMap_forEach((v, key) => {
        element.style[key] = v ?? "";
    }))))
    : Disposable.disposed;
export const __animate = (animation, selector) => {
    const memoizedSelector = __constant(selector);
    const htmlElementState = __state(returnsNone);
    const setRef = __memo(makeRefSetter, htmlElementState);
    const htmlElement = __observe(htmlElementState);
    __using(animateHtmlElement, htmlElement, animation, memoizedSelector ?? identity);
    return setRef;
};
