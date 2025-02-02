import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type * as React from "react";
import { nullObject } from "../../__internal__/constants.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import { DictionaryLike, ReadonlyObjectMapLike } from "../../collections.js";
import * as Streamable from "../../concurrent/Streamable.js";
import { PureRunnableLike, StreamLike } from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import { EventSourceLike, StoreLike_value } from "../../events.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Updater,
  identity,
  isFunction,
  isNull,
  none,
  pipe,
  pipeSomeLazy,
} from "../../functions.js";
import { BackpressureStrategy } from "../../utils.js";
import { useDisposable, useListen, useObserve, useStream } from "../react.js";
import * as AnimationFrameScheduler from "../web/AnimationFrameScheduler.js";
import * as WebElement from "../web/Element.js";
import {
  CSSStyleMapLike,
  ScrollValue,
  WindowLocationLike,
  WindowLocationLike_canGoBack,
  WindowLocationLike_goBack,
  WindowLocationLike_push,
  WindowLocationLike_replace,
  WindowLocationURI,
} from "../web.js";

interface ReactWebModule {
  WindowLocationProvider(props: {
    windowLocation: WindowLocationLike;
    children: React.ReactNode;
  }): React.ReactNode;

  /**
   */
  useAnimate<TElement extends HTMLElement>(
    animation: Optional<EventSourceLike<CSSStyleMapLike>>,
  ): React.Ref<TElement>;
  useAnimate<TElement extends HTMLElement, T>(
    animation: Optional<EventSourceLike<T>>,
    selector: Function1<T, CSSStyleMapLike>,
    deps: readonly unknown[],
  ): React.Ref<TElement>;

  useAnimationGroup<T, TEvent = unknown, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
    >,
    options?:
      | { readonly mode: "switching"; readonly priority?: 1 | 2 | 3 | 4 | 5 }
      | { readonly mode: "blocking"; readonly priority?: 1 | 2 | 3 | 4 | 5 }
      | {
          readonly mode: "queueing";
          readonly priority?: 1 | 2 | 3 | 4 | 5;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        },
  ): Optional<
    StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>
  >;

  /**
   */
  useScroll<TElement extends HTMLElement>(
    callback: SideEffect1<ScrollValue>,
    deps: readonly unknown[],
  ): React.Ref<TElement>;

  /**
   */
  useWindowLocation(): {
    uri: Optional<WindowLocationURI>;
    push: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
    replace: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
    canGoBack: boolean;
    goBack: () => void;
  };
}

type Signature = ReactWebModule;

const WindowLocationContext = /*@__PURE__*/ createContext<WindowLocationLike>(
  none as unknown as WindowLocationLike,
);

export const useAnimate: Signature["useAnimate"] = <
  TElement extends HTMLElement,
  T,
>(
  animation: Optional<EventSourceLike<T>>,
  selector?: Function1<T, CSSStyleMapLike>,
  deps?: readonly unknown[],
) => {
  const ref = useRef<TElement>(nullObject);

  const memoizedSelector = isFunction(selector)
    ? useCallback(selector, deps ?? [])
    : (identity as Function1<T, CSSStyleMapLike>);

  useDisposable(
    pipeSomeLazy(
      animation,
      EventSource.addEventHandler(v => {
        const element = ref.current;
        if (!isNull(element)) {
          pipe(
            memoizedSelector(v),
            ReadonlyObjectMap.forEach<string, keyof CSSStyleMapLike>(
              (v, key) => {
                element.style[key] = v ?? "";
              },
            ),
          );
        }
      }),
    ),
    [animation, memoizedSelector],
  );

  return ref;
};

export const useAnimationGroup: Signature["useAnimationGroup"] = <
  T,
  TEvent = unknown,
  TKey extends string = string,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
  >,
  options?:
    | { readonly mode: "switching"; readonly priority?: 1 | 2 | 3 | 4 | 5 }
    | { readonly mode: "blocking"; readonly priority?: 1 | 2 | 3 | 4 | 5 }
    | {
        readonly mode: "queueing";
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
      },
) => {
  const animationFrameScheduler = AnimationFrameScheduler.get();

  return useStream(
    () =>
      Streamable.animationGroup(animationGroup, {
        mode: "switching",
        ...((options as unknown) ?? {}),
        scheduler: animationFrameScheduler,
      }),
    [animationFrameScheduler],
  );
};

export const useScroll: Signature["useScroll"] = <TElement extends HTMLElement>(
  callback: SideEffect1<ScrollValue>,
  deps: readonly unknown[],
) => {
  const [element, setElement] = useState<Optional<TElement>>();

  const memoizedCallback = useCallback(callback, deps);

  useDisposable(
    pipeSomeLazy(element, WebElement.addScrollHandler(memoizedCallback)),
    [element, memoizedCallback],
  );

  return setElement as React.Ref<TElement>;
};

export const useWindowLocation: Signature["useWindowLocation"] = () => {
  const windowLocation = useContext(WindowLocationContext);

  const uri = useObserve(windowLocation);

  const stableWindowLocationRef = useRef<Optional<WindowLocationLike>>(none);
  useEffect(() => {
    stableWindowLocationRef.current = windowLocation;
  }, [windowLocation, stableWindowLocationRef]);

  const push = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationRef.current;
      return windowLocationStream?.[WindowLocationLike_push](action) ?? false;
    },
    [stableWindowLocationRef],
  );

  const replace = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationRef.current;
      return (
        windowLocationStream?.[WindowLocationLike_replace](action) ?? false
      );
    },
    [stableWindowLocationRef],
  );

  const goBack = useCallback(() => {
    const windowLocationStream = stableWindowLocationRef.current;
    return windowLocationStream?.[WindowLocationLike_goBack]() ?? false;
  }, [stableWindowLocationRef]);

  const canGoBack =
    useListen(windowLocation[WindowLocationLike_canGoBack]) ??
    windowLocation[WindowLocationLike_canGoBack][StoreLike_value];

  return {
    uri,
    push,
    replace,
    goBack,
    canGoBack,
  };
};

export const WindowLocationProvider: Signature["WindowLocationProvider"] = ({
  windowLocation,
  children,
}: {
  windowLocation: WindowLocationLike;
  children: React.ReactNode;
}) =>
  createElement(
    WindowLocationContext.Provider,
    {
      value: windowLocation,
    },
    children,
  );
