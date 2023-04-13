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
  Function1,
  Optional,
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
  EventSourceLike,
  EventSourceLike_addListener,
  QueueableLike_enqueue,
} from "../../util.js";
import * as EventListener from "../../util/EventListener.js";
import { useObservable, useStream } from "../react.js";
import {
  CSSStyleKey,
  WindowLocationStreamLike,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
  WindowLocationStreamLike_replace,
  WindowLocationURI,
  addScrollListener,
  windowLocation,
} from "../web.js";

const WindowLocationContext =
  /*@__PURE__*/ createContext<WindowLocationStreamLike>(
    none as unknown as WindowLocationStreamLike,
  );

/**
 * @category Hook
 */
export const useWindowLocationStream = (): WindowLocationStreamLike =>
  useContext(WindowLocationContext);

/**
 * @category Hook
 */
export const useWindowLocation = (): {
  uri: Optional<WindowLocationURI>;
  push: Function1<Updater<WindowLocationURI> | WindowLocationURI, boolean>;
  replace: Function1<Updater<WindowLocationURI> | WindowLocationURI, boolean>;
  canGoBack: boolean;
  goBack: () => void;
} => {
  const windowLocationStream = useWindowLocationStream();

  const uri = useObservable(windowLocationStream);

  const stableWindowLocationStreamRef =
    useRef<Optional<WindowLocationStreamLike>>(none);
  useEffect(() => {
    stableWindowLocationStreamRef.current = windowLocationStream;
  }, [windowLocationStream, stableWindowLocationStreamRef]);

  const push = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationStreamRef.current;
      return isSome(windowLocationStream)
        ? windowLocationStream[QueueableLike_enqueue](action)
        : false;
    },
    [stableWindowLocationStreamRef],
  );

  const replace = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationStreamRef.current;
      return isSome(windowLocationStream)
        ? windowLocationStream[WindowLocationStreamLike_replace](action)
        : false;
    },
    [stableWindowLocationStreamRef],
  );

  const goBack = useCallback(() => {
    const windowLocationStream = stableWindowLocationStreamRef.current;
    return isSome(windowLocationStream)
      ? windowLocationStream[WindowLocationStreamLike_goBack]()
      : false;
  }, [stableWindowLocationStreamRef]);

  const canGoBack =
    useObservable(windowLocationStream[WindowLocationStreamLike_canGoBack]) ??
    false;

  return {
    uri,
    push,
    replace,
    goBack,
    canGoBack,
  };
};

export const WindowLocationProvider: React.FunctionComponent<{
  priority?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}> = ({
  priority,
  children,
}: {
  priority?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}) => {
  const value = useStream(windowLocation, { priority });

  return isSome(value)
    ? createElement(
        WindowLocationContext.Provider,
        {
          value,
        },
        children,
      )
    : null;
};

/**
 * @category Hook
 */
export const useAnimate = <
  TElement extends HTMLElement,
  T = number,
  TEvent = unknown,
>(
  value: Optional<EventSourceLike<{ event: TEvent; value: T }>>,
  selector: (ev: {
    event: TEvent;
    value: T;
  }) => ReadonlyObjectMapLike<string, CSSStyleKey>,
  deps: readonly unknown[] = [],
): React.Ref<TElement> => {
  const ref = useRef<TElement>(null);
  const selectorMemoized = useCallback(selector, deps);

  useEffect(() => {
    if (isNone(value)) {
      return;
    }

    const listener = EventListener.create((v: { event: TEvent; value: T }) => {
      const element = ref.current;
      if (element != null) {
        pipe(
          selectorMemoized(v) as ReadonlyObjectMapLike<string, CSSStyleKey>,
          ReadonlyObjectMap.forEachWithKey<string, CSSStyleKey>((v, key) => {
            element.style[key] = v ?? "";
          }),
        );
      }
    });

    value[EventSourceLike_addListener](listener);

    return bindMethod(listener, DisposableLike_dispose);
  }, [value, selectorMemoized, ref]);

  return ref;
};

export const useScroll = (
  onScrollEvent: (ev: {
    event: "scroll";
    value: {
      x: {
        current: number;
        progress: number;
        scrollLength: number;
      };
      y: {
        current: number;
        progress: number;
        scrollLength: number;
      };
    };
  }) => void,
  deps: readonly unknown[] = [],
): React.Ref<HTMLElement> => {
  const [element, setElement] = useState<Optional<HTMLElement>>();

  const onScrollEventMemoized = useCallback(onScrollEvent, deps);

  useEffect(() => {
    if (isNone(element)) {
      return;
    }

    const listener = EventListener.create(onScrollEventMemoized);

    pipe(element, addScrollListener(listener));

    return bindMethod(listener, DisposableLike_dispose);
  }, [element, onScrollEventMemoized]);

  return setElement as React.Ref<HTMLElement>;
};
