/// <reference types="./web.d.ts" />

import { createContext, createElement, useCallback, useContext, useEffect, useRef, useState, } from "react";
import { nullObject } from "../__internal__/constants.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import * as EventSource from "../computations/EventSource.js";
import * as Streamable from "../computations/Streamable.js";
import { StoreLike_value, } from "../computations.js";
import { identity, isFunction, isNull, none, pipe, pipeSomeLazy, } from "../functions.js";
import { useDisposable, useListen, useObserve, useStore, useStream, } from "../react.js";
import * as AnimationFrameScheduler from "../web/AnimationFrameScheduler.js";
import * as WebElement from "../web/Element.js";
import { WindowLocationLike_canGoBack, WindowLocationLike_goBack, WindowLocationLike_push, WindowLocationLike_replace, } from "../web.js";
const WindowLocationContext = /*@__PURE__*/ createContext(none);
export const useAnimate = (animation, selector, deps) => {
    const ref = useRef(nullObject);
    const memoizedSelector = isFunction(selector)
        ? useCallback(selector, deps ?? [])
        : identity;
    useDisposable(pipeSomeLazy(animation, EventSource.addEventHandler(v => {
        const element = ref.current;
        if (!isNull(element)) {
            pipe(memoizedSelector(v), ReadonlyObjectMap.forEach((v, key) => {
                element.style[key] = v ?? "";
            }));
        }
    })), [animation, memoizedSelector]);
    return ref;
};
export const useAnimation = (animation, options) => {
    const animationScheduler = options?.animationScheduler ?? AnimationFrameScheduler.get();
    return useStream(() => Streamable.animation(animation, {
        animationScheduler,
    }), [animationScheduler], options);
};
export const useAnimationGroup = (animationGroup, options) => {
    const animationScheduler = options?.animationScheduler ?? AnimationFrameScheduler.get();
    return useStream(() => Streamable.animationGroup(animationGroup, {
        animationScheduler,
    }), [animationScheduler], options);
};
export const useMeasure = () => {
    const [container, setContainer] = useState(null);
    const rect = useStore(pipeSomeLazy(container ?? none, WebElement.measure()), [container]);
    return [setContainer, rect];
};
export const useScroll = (callback, deps) => {
    const [element, setElement] = useState(null);
    const memoizedCallback = useCallback(callback, deps);
    useDisposable(pipeSomeLazy(element ?? none, WebElement.addScrollHandler(memoizedCallback)), [element, memoizedCallback]);
    return setElement;
};
export const useSpring = (initialValue, options) => {
    const animationScheduler = AnimationFrameScheduler.get();
    return useStream(() => Streamable.spring(initialValue, {
        ...options,
        animationScheduler,
    }), [initialValue, animationScheduler], options);
};
export const useWindowLocation = () => {
    const windowLocation = useContext(WindowLocationContext);
    const uri = useObserve(windowLocation);
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
    const canGoBack = useListen(windowLocation[WindowLocationLike_canGoBack]) ??
        windowLocation[WindowLocationLike_canGoBack][StoreLike_value];
    return {
        uri,
        push,
        replace,
        goBack,
        canGoBack,
    };
};
export const WindowLocationProvider = ({ windowLocation, children, }) => createElement(WindowLocationContext.Provider, {
    value: windowLocation,
}, children);
