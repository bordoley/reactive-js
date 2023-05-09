import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as React from "react";
import * as EventSource from "../../EventSource.js";
import * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Updater,
  identity,
  isFunction,
  isSome,
  none,
  pipe,
  pipeSomeLazy,
} from "../../functions.js";
import { EventSourceLike } from "../../types.js";
import { useDisposable, useObserve } from "../react.js";
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
import * as WebElement from "../web/Element.js";

const WindowLocationContext = /*@__PURE__*/ createContext<WindowLocationLike>(
  none as unknown as WindowLocationLike,
);

/**
 * @category Hook
 */
export const useWindowLocation = (): {
  uri: Optional<WindowLocationURI>;
  push: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
  replace: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
  canGoBack: boolean;
  goBack: () => void;
} => {
  const windowLocation = useContext(WindowLocationContext);

  const uri = useObserve(windowLocation);

  const stableWindowLocationRef = useRef<Optional<WindowLocationLike>>(none);
  useEffect(() => {
    stableWindowLocationRef.current = windowLocation;
  }, [windowLocation, stableWindowLocationRef]);

  const push = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationRef.current;
      return isSome(windowLocationStream)
        ? windowLocationStream[WindowLocationLike_push](action)
        : false;
    },
    [stableWindowLocationRef],
  );

  const replace = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationRef.current;
      return isSome(windowLocationStream)
        ? windowLocationStream[WindowLocationLike_replace](action)
        : false;
    },
    [stableWindowLocationRef],
  );

  const goBack = useCallback(() => {
    const windowLocationStream = stableWindowLocationRef.current;
    return isSome(windowLocationStream)
      ? windowLocationStream[WindowLocationLike_goBack]()
      : false;
  }, [stableWindowLocationRef]);

  const canGoBack =
    useObserve(windowLocation[WindowLocationLike_canGoBack]) ?? false;

  return {
    uri,
    push,
    replace,
    goBack,
    canGoBack,
  };
};

export const WindowLocationProvider: React.FunctionComponent<{
  windowLocation: WindowLocationLike;
  children: React.ReactNode;
}> = ({
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

interface UseAnimate {
  useAnimate<TElement extends HTMLElement>(
    animation: Optional<EventSourceLike<CSSStyleMapLike>>,
  ): React.Ref<TElement>;

  useAnimate<TElement extends HTMLElement, T>(
    animation: Optional<EventSourceLike<T>>,
    selector: Function1<T, CSSStyleMapLike>,
    deps: readonly unknown[],
  ): React.Ref<TElement>;
}

/**
 * @category Hook
 */
export const useAnimate: UseAnimate["useAnimate"] = <
  TElement extends HTMLElement,
  T,
>(
  animation: Optional<EventSourceLike<T>>,
  selector?: Function1<T, CSSStyleMapLike>,
  deps?: readonly unknown[],
): React.Ref<TElement> => {
  const ref = useRef<TElement>(null);

  const memoizedSelector = isFunction(selector)
    ? useCallback(selector, deps ?? [])
    : (identity as Function1<T, CSSStyleMapLike>);

  useDisposable(
    pipeSomeLazy(
      animation,
      EventSource.addEventHandler(v => {
        const element = ref.current;
        if (element != null) {
          pipe(
            memoizedSelector(v),
            ReadonlyObjectMap.forEachWithKey<string, keyof CSSStyleMapLike>(
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

/**
 * @category Hook
 */
export const useScroll = <TElement extends HTMLElement>(
  callback: SideEffect1<ScrollValue>,
  deps: readonly unknown[],
): React.Ref<TElement> => {
  const [element, setElement] = useState<Optional<TElement>>();

  const memoizedCallback = useCallback(callback, deps);

  useDisposable(
    pipeSomeLazy(element, WebElement.addScrollHandler(memoizedCallback)),
    [element, memoizedCallback],
  );

  return setElement as React.Ref<TElement>;
};
