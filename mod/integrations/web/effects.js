/// <reference types="./effects.d.ts" />

import { compose, identity, none, pipe, returns, } from "../../functions.js";
import * as ReadonlyObjectMap from "../../keyed-containers/ReadonlyObjectMap.js";
import { __memo, __observe, __state, __using } from "../../rx/effects.js";
import { QueueableLike_enqueue, } from "../../util.js";
import * as Disposable from "../../util/Disposable.js";
import * as EventSource from "../../util/EventSource.js";
const returnsNone = returns(none);
const makeRefSetter = (dispatcher) => ele => dispatcher[QueueableLike_enqueue](returns(ele));
const animateHtmlElement = (element, animation, selector) => 
// Just in case a caller sets it to null instead of undefined
element != null
    ? pipe(animation, EventSource.addEventHandler(compose(selector, ReadonlyObjectMap.forEachWithKey((v, key) => {
        element.style[key] = v ?? "";
    }))))
    : Disposable.disposed;
export const __animate = (animation, selector) => {
    const htmlElementState = __state(returnsNone);
    const setRef = __memo(makeRefSetter, htmlElementState);
    const htmlElement = __observe(htmlElementState);
    __using(animateHtmlElement, htmlElement, animation, selector ?? identity);
    return setRef;
};
const defaultSelector = (ev) => ev.value;
export const __animateEvent = (animation, selector) => {
    return __animate(animation, selector ?? defaultSelector);
};
