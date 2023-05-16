/// <reference types="./Element.d.ts" />

import * as Disposable from "../../Disposable.js";
import * as EventListener from "../../EventListener.js";
import * as EventSource from "../../EventSource.js";
import * as Observable from "../../Observable.js";
import * as CurrentTime from "../../Scheduler/__internal__/CurrentTime.js";
import { MAX_VALUE, MIN_VALUE } from "../../__internal__/constants.js";
import { clamp } from "../../__internal__/math.js";
import { bindMethod, isNone, newInstance, none, pipe, returns, } from "../../functions.js";
import { EventSourceLike_addEventListener, QueueableLike_enqueue, SinkLike_notify, } from "../../types.js";
export const addEventHandler = (eventName, eventHandler, options) => source => {
    const listener = EventListener.create(eventHandler, { errorSafe: true });
    pipe(source, addEventListener(eventName, listener, options));
    return listener;
};
export const addEventListener = ((eventName, eventListener, options) => target => {
    const errorSafeEventListener = pipe(eventListener, Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = bindMethod(errorSafeEventListener, SinkLike_notify);
    const addEventListenerOptions = {
        capture: options?.capture ?? false,
        passive: options?.capture ?? true,
    };
    target.addEventListener(eventName, listener, addEventListenerOptions);
    return target;
});
export const observeEvent = ((eventName, selector, options) => target => Observable.create(observer => {
    const addEventHandlerOptions = {
        passive: true,
        capture: options?.capture,
    };
    pipe(target, addEventHandler(eventName, ev => {
        const result = selector(ev);
        observer[QueueableLike_enqueue](result);
    }, addEventHandlerOptions), Disposable.bindTo(observer));
}));
export const addScrollHandler = (handler) => element => {
    const listener = EventListener.create(handler);
    pipe(element, addScrollListener(listener));
    return listener;
};
let windowResizeEventSourceRef = none;
const getWindowResizeEventSource = () => {
    const windowResizeEventSource = windowResizeEventSourceRef ??
        (() => {
            const windowResizeEventPublisher = pipe(EventSource.createRefCountedPublisher(), Disposable.onDisposed(() => {
                windowResizeEventSourceRef = none;
            }));
            windowResizeEventSourceRef = windowResizeEventPublisher;
            pipe(window, addEventListener("resize", windowResizeEventPublisher));
            return windowResizeEventPublisher;
        })();
    return windowResizeEventSource;
};
let windowScrollEventSourceRef = none;
const getWindowScrollEventSource = () => {
    const windowScrollEventSource = windowScrollEventSourceRef ??
        (() => {
            const windowScrollEventsPublisher = pipe(EventSource.createRefCountedPublisher(), Disposable.onDisposed(() => {
                windowScrollEventSourceRef = none;
            }));
            windowScrollEventSourceRef = windowScrollEventsPublisher;
            pipe(window, addEventListener("scroll", windowScrollEventsPublisher, {
                capture: true,
            }));
            return windowScrollEventsPublisher;
        })();
    return windowScrollEventSource;
};
export const addScrollListener = /*@__PURE__*/ (() => {
    const calcProgress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);
    return (listener) => (element) => {
        let prevTime = MIN_VALUE;
        let xPrev = 0;
        let yPrev = 0;
        let xVelocityPrev = 0;
        let yVelocityPrev = 0;
        const eventListener = pipe(EventListener.create((ev) => {
            if (ev.type === "resize") {
                prevTime = MIN_VALUE;
                xPrev = 0;
                yPrev = 0;
                xVelocityPrev = 0;
                yVelocityPrev = 0;
            }
            const now = CurrentTime.now();
            const dt = clamp(0, now - prevTime, MAX_VALUE);
            // FIXME: Nearly every production implementation seems to reuse an
            // event object to avoid memory allocations.
            const xCurrent = element.scrollLeft;
            const xScrollLength = element.scrollWidth - element.clientWidth;
            const xVelocity = (xCurrent - xPrev) / dt;
            const xAcceleration = dt > 0 ? (xVelocity - xVelocityPrev) / dt : 0;
            const yCurrent = element.scrollTop;
            const yScrollLength = element.scrollHeight - element.clientHeight;
            const yVelocity = (yCurrent - yPrev) / dt;
            const yAcceleration = dt > 0 ? (yVelocity - yVelocityPrev) / dt : 0;
            const x = {
                current: xCurrent,
                scrollLength: xScrollLength,
                progress: calcProgress(0, xScrollLength, xCurrent),
                velocity: xVelocity,
                acceleration: xAcceleration,
            };
            const y = {
                current: yCurrent,
                scrollLength: yScrollLength,
                progress: calcProgress(0, yScrollLength, yCurrent),
                velocity: yVelocity,
                acceleration: yAcceleration,
            };
            prevTime = now;
            xPrev = xCurrent;
            xVelocityPrev = xVelocity;
            yPrev = yCurrent;
            yVelocityPrev = yVelocity;
            listener[SinkLike_notify]({ x, y });
        }, { errorSafe: true }), Disposable.bindTo(listener));
        pipe(element, addEventListener("scroll", eventListener));
        const windowResizeEventSource = getWindowResizeEventSource();
        windowResizeEventSource[EventSourceLike_addEventListener](eventListener);
        return element;
    };
})();
export const addResizeHandler = (handler) => element => {
    const listener = EventListener.create(handler);
    pipe(element, addResizeListener(listener));
    return listener;
};
export const addResizeListener = /*@__PURE__*/ (() => {
    const publishers = newInstance(Map);
    let resizeObserver = none;
    const resizeObserverCallback = (entries) => {
        for (const entry of entries) {
            const publisher = publishers.get(entry.target);
            if (isNone(publisher)) {
                continue;
            }
            publisher[SinkLike_notify](entry);
        }
    };
    return (listener, options) => element => {
        resizeObserver =
            resizeObserver ??
                (() => newInstance(ResizeObserver, resizeObserverCallback))();
        const publisher = publishers.get(element) ??
            (() => {
                const publisher = pipe(EventSource.createRefCountedPublisher(), Disposable.onDisposed(() => {
                    resizeObserver?.unobserve(element);
                    publishers.delete(element);
                    if (publishers.size > 0) {
                        return;
                    }
                    resizeObserver?.disconnect();
                    resizeObserver = none;
                }));
                publishers.set(element, publisher);
                resizeObserver.observe(element, options);
                return publisher;
            })();
        publisher[EventSourceLike_addEventListener](listener);
        return element;
    };
})();
export const addMeasureHandler = (handler) => element => {
    const listener = EventListener.create(handler);
    pipe(element, addMeasureListener(listener));
    return listener;
};
export const addMeasureListener = /*@__PURE__*/ (() => {
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
    return listener => element => {
        const eventListener = pipe(EventListener.create(() => {
            const { left, top, width, height, bottom, right, x, y } = element.getBoundingClientRect();
            const rect = {
                left,
                top,
                width,
                height,
                bottom,
                right,
                x,
                y,
            };
            /*
              if (state.current.element instanceof HTMLElement && offsetSize) {
                size.height = state.current.element.offsetHeight
                size.width = state.current.element.offsetWidth
              }
              */
            listener[SinkLike_notify](rect);
        }, { errorSafe: true }), Disposable.bindTo(listener));
        pipe(element, addResizeListener(eventListener));
        for (const scrollContainer of findScrollContainers(element)) {
            pipe(scrollContainer, addEventListener("scroll", eventListener));
        }
        const windowResizeEventSource = getWindowResizeEventSource();
        windowResizeEventSource[EventSourceLike_addEventListener](eventListener);
        const windowScrollEventSource = getWindowScrollEventSource();
        windowScrollEventSource[EventSourceLike_addEventListener](eventListener);
        return element;
    };
})();
export const observeMeasure = 
/*@__PURE__*/ (() => {
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
    return returns(element => pipe(Observable.create(observer => {
        const listener = pipe(EventListener.create(bindMethod(observer, QueueableLike_enqueue)), Disposable.bindTo(observer));
        pipe(element, addMeasureListener(listener));
        const { left, top, width, height, bottom, right, x, y } = element.getBoundingClientRect();
        const rect = {
            left,
            top,
            width,
            height,
            bottom,
            right,
            x,
            y,
        };
        observer[QueueableLike_enqueue](rect);
    }), Observable.distinctUntilChanged({ equality: areBoundsEqual })));
})();
export const intersectionWith = 
/*@__PURE__*/ (() => {
    const intersectionObservers = newInstance(Map);
    const eventPublishers = newInstance(Map);
    return (root = document) => child => EventSource.create(listener => {
        const publisher = eventPublishers.get(root)?.get(child) ??
            (() => {
                const publisher = EventSource.createRefCountedPublisher();
                const parentMap = eventPublishers.get(root) ??
                    (() => {
                        const parentMap = newInstance(Map);
                        eventPublishers.set(root, parentMap);
                        return parentMap;
                    })();
                parentMap.set(child, publisher);
                const intersectionObserver = intersectionObservers.get(root) ??
                    (() => {
                        const cb = (entries) => {
                            for (const entry of entries) {
                                const { target } = entry;
                                const listener = eventPublishers.get(root)?.get(target);
                                if (isNone(listener)) {
                                    continue;
                                }
                                listener[SinkLike_notify](entry);
                            }
                        };
                        const intersectionObserver = newInstance(IntersectionObserver, cb, { root });
                        intersectionObservers.set(root, intersectionObserver);
                        return intersectionObserver;
                    })();
                intersectionObserver.observe(child);
                return pipe(publisher, Disposable.onDisposed(() => {
                    const intersectionObserver = intersectionObservers.get(root);
                    intersectionObserver?.unobserve(child);
                    const childToPublisherMap = eventPublishers.get(root);
                    childToPublisherMap?.delete(child);
                    if ((childToPublisherMap?.size ?? 0) > 0) {
                        return;
                    }
                    eventPublishers.delete(root);
                    intersectionObserver?.disconnect();
                    intersectionObservers.delete(root);
                }));
            })();
        publisher[EventSourceLike_addEventListener](listener);
    });
})();
