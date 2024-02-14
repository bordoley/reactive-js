/// <reference types="./effects.d.ts" />

import { Map_delete, Map_get, Map_set, nullObject, } from "../../__internal__/constants.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import { __constant, __currentScheduler, __memo, __observe, __state, __stream, __using, } from "../../concurrent/Observable/effects.js";
import * as Streamable from "../../concurrent/Streamable.js";
import * as EventSource from "../../events/EventSource.js";
import { compose, identity, newInstance, none, pipe, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { QueueableLike_enqueue, } from "../../utils.js";
import * as AnimationFrameScheduler from "./AnimationFrameScheduler.js";
const returnsNone = returns(none);
const makeRefSetter = (dispatcher) => ele => dispatcher[QueueableLike_enqueue](returns(ele));
const animateHtmlElement = (element, animation, selector) => 
// Just in case a caller sets it to null instead of undefined
element != nullObject
    ? pipe(animation, EventSource.addEventHandler(compose(selector, ReadonlyObjectMap.forEach((v, key) => {
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
const __animationFrameScheduler = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return () => {
        const scheduler = __currentScheduler();
        return (schedulerCache[Map_get](scheduler) ??
            (() => {
                const animationFrameScheduler = AnimationFrameScheduler.create(scheduler);
                schedulerCache[Map_set](scheduler, animationFrameScheduler);
                pipe(animationFrameScheduler, DisposableContainer.onDisposed(_ => schedulerCache[Map_delete](scheduler)));
                return scheduler;
            })());
    };
})();
export const __animationGroup = (animationGroup, options) => {
    const animationFrameScheduler = __animationFrameScheduler();
    const animationGroupStreamable = __constant(Streamable.animationGroup(animationGroup, {
        mode: "switching",
        ...(options ?? {}),
        scheduler: animationFrameScheduler,
    }), animationFrameScheduler);
    return __stream(animationGroupStreamable);
};
