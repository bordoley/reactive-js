import * as React from "react";
import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Optional,
  SideEffect1,
  Updater,
  bindMethod,
  isNone,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../keyed-containers.js";
import * as ReadonlyObjectMap from "../../keyed-containers/ReadonlyObjectMap.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventSourceLike,
} from "../../util.js";
import * as EventSource from "../../util/EventSource.js";
import { useObservable } from "../react.js";
import {
  CSSStyleKey,
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

  const uri = useObservable(windowLocation);

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
    useObservable(windowLocation[WindowLocationLike_canGoBack]) ?? false;

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
  priority?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}) =>
  createElement(
    WindowLocationContext.Provider,
    {
      value: windowLocation,
    },
    children,
  );

/**
 * @category Hook
 */
export const useAnimate = <TElement extends HTMLElement, T = number>(
  animation: Optional<EventSourceLike<T>>,
  selector: (ev: T) => ReadonlyObjectMapLike<string, CSSStyleKey>,
  deps: readonly unknown[] = [],
): React.Ref<TElement> => {
  const ref = useRef<TElement>(null);
  const selectorMemoized = useCallback(selector, deps);

  useEffect(() => {
    if (isNone(animation)) {
      return;
    }

    const disposable = pipe(
      animation,
      EventSource.addEventHandler(v => {
        const element = ref.current;
        if (element != null) {
          pipe(
            selectorMemoized(v) as ReadonlyObjectMapLike<string, CSSStyleKey>,
            ReadonlyObjectMap.forEachWithKey<string, CSSStyleKey>((v, key) => {
              element.style[key] = v ?? "";
            }),
          );
        }
      }),
    );

    return bindMethod(disposable, DisposableLike_dispose);
  }, [animation, selectorMemoized, ref]);

  return ref;
};

/**
 * @category Hook
 */
export const useAnimateEvent = <
  TElement extends HTMLElement,
  T = number,
  TEvent = unknown,
>(
  animation: Optional<EventSourceLike<{ event: TEvent; value: T }>>,
  selector: (ev: {
    event: TEvent;
    value: T;
  }) => ReadonlyObjectMapLike<string, CSSStyleKey>,
  deps: readonly unknown[] = [],
): React.Ref<TElement> => {
  return useAnimate<TElement, { event: TEvent; value: T }>(
    animation,
    selector,
    deps,
  );
};

/**
 * @category Hook
 */
export const useScroll = <TElement extends HTMLElement>(
  eventListener: EventListenerLike<{
    event: "scroll";
    value: ScrollValue;
  }>,
): React.Ref<TElement> => {
  const [element, setElement] = useState<Optional<TElement>>();

  useEffect(() => {
    if (isNone(element)) {
      return;
    }

    pipe(element, WebElement.addScrollListener(eventListener));
  }, [element, eventListener]);

  return setElement as React.Ref<TElement>;
};
