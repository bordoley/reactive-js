/// <reference types="./web.d.ts" />

import { createContext, createElement, useCallback, useContext, useEffect, useRef, useState, } from "react";
import { nullObject } from "../__internal__/constants.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import * as Broadcaster from "../computations/Broadcaster.js";
import * as Publisher from "../computations/Publisher.js";
import * as Streamable from "../computations/Streamable.js";
import { StoreLike_value, } from "../computations.js";
import { isFunction, isNull, none, pipe, pipeSome, pipeSomeLazy, tuple, } from "../functions.js";
import { useDisposable, useEventSource, useStreamable } from "../react.js";
import { EventListenerLike_notify } from "../utils.js";
import * as AnimationFrameScheduler from "../web/AnimationFrameScheduler.js";
import * as WebElement from "../web/Element.js";
import { WindowLocationLike_canGoBack, WindowLocationLike_goBack, WindowLocationLike_push, WindowLocationLike_replace, } from "../web.js";
const WindowLocationContext = /*@__PURE__*/ createContext(none);
export const WindowLocationProvider = ({ windowLocation, children, }) => createElement(WindowLocationContext.Provider, {
    value: windowLocation,
}, children);
export const useAnimate = (animation, selector, deps) => {
    const ref = useRef(nullObject);
    const memoizedSelector = isFunction(selector)
        ? useCallback(selector, deps ?? [])
        : Streamable.identity;
    useDisposable(pipeSomeLazy(animation, Broadcaster.addEventHandler(v => {
        const element = ref.current;
        if (!isNull(element)) {
            pipe(memoizedSelector(v), ReadonlyObjectMap.forEach((v, key) => {
                element.style[key] = v ?? "";
            }));
        }
    })), [animation, memoizedSelector]);
    return ref;
};
export const useAnimation = (animation) => {
    const scheduler = AnimationFrameScheduler.get();
    return useStreamable(() => Streamable.animation(animation), [], {
        scheduler,
    });
};
export const useAnimationGroup = (animationGroup) => {
    const scheduler = AnimationFrameScheduler.get();
    return useStreamable(() => Streamable.animationGroup(animationGroup), [], {
        scheduler,
    });
};
export const useMeasure = () => {
    const [container, setContainer] = useState(null);
    const rect = useEventSource(pipeSome(container ?? none, WebElement.measure()));
    return [setContainer, rect];
};
export const useScroll = () => {
    const [element, setElement] = useState(null);
    const publisher = useDisposable((Publisher.create), []);
    useDisposable(pipeSomeLazy(element ?? none, WebElement.addScrollHandler(ev => {
        publisher?.[EventListenerLike_notify](ev);
    })), [element, publisher]);
    return tuple(setElement, publisher);
};
export const useSpring = (options) => {
    const scheduler = AnimationFrameScheduler.get();
    const { stiffness, damping, precision } = options ?? {};
    return useStreamable(() => Streamable.spring({
        stiffness,
        damping,
        precision,
    }), [stiffness, damping, precision], {
        scheduler,
    });
};
export const useWindowLocation = () => {
    const windowLocation = useContext(WindowLocationContext);
    const uri = useEventSource(windowLocation);
    const stableWindowLocationRef = useRef(none);
    useEffect(() => {
        stableWindowLocationRef.current = windowLocation;
    }, [windowLocation, stableWindowLocationRef]);
    const push = useCallback((action) => {
        const windowLocationStream = stableWindowLocationRef.current;
        return windowLocationStream?.[WindowLocationLike_push](action) ?? false;
    }, [stableWindowLocationRef]);
    const replace = useCallback((action) => {
        const windowLocationStream = stableWindowLocationRef.current;
        return (windowLocationStream?.[WindowLocationLike_replace](action) ?? false);
    }, [stableWindowLocationRef]);
    const goBack = useCallback(() => {
        const windowLocationStream = stableWindowLocationRef.current;
        return windowLocationStream?.[WindowLocationLike_goBack]() ?? false;
    }, [stableWindowLocationRef]);
    const canGoBack = useEventSource(windowLocation[WindowLocationLike_canGoBack]) ??
        windowLocation[WindowLocationLike_canGoBack][StoreLike_value];
    return {
        uri,
        push,
        replace,
        goBack,
        canGoBack,
    };
};
