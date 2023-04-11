import * as React from "react";
import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import {
  Function1,
  Optional,
  Updater,
  bindMethod,
  identity,
  isNone,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import { ReadonlyRecordLike } from "../../keyed-containers.js";
import * as ReadonlyRecord from "../../keyed-containers/ReadonlyRecord.js";
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

interface UseAnimatedValue {
  useAnimatedValue<TElement extends HTMLElement>(
    value: Optional<EventSourceLike<ReadonlyRecordLike<string, CSSStyleKey>>>,
  ): React.RefObject<TElement>;

  useAnimatedValue<TElement extends HTMLElement, T>(
    value: Optional<EventSourceLike<T>>,
    selector: (v: T) => Partial<ReadonlyRecordLike<string, CSSStyleKey>>,
    deps: readonly unknown[],
  ): React.RefObject<TElement>;
}
/**
 * @category Hook
 */
export const useAnimatedValue: UseAnimatedValue["useAnimatedValue"] = (<
  TElement extends HTMLElement,
  T = Partial<ReadonlyRecordLike<string, CSSStyleKey>>,
>(
  value: Optional<EventSourceLike<T>>,
  selector = identity,
  deps = [],
): React.Ref<TElement> => {
  const ref = useRef<TElement>(null);

  const selectorMemoized = useCallback(selector, deps);

  useEffect(() => {
    if (isNone(value)) {
      return;
    }

    const listener = EventListener.create((v: T) => {
      const element = ref.current;
      if (element != null) {
        pipe(
          selectorMemoized(v) as ReadonlyRecordLike<string, CSSStyleKey>,
          ReadonlyRecord.forEachWithKey<string, CSSStyleKey>((v, key) => {
            element.style[key] = v ?? "";
          }),
        );
      }
    });

    value[EventSourceLike_addListener](listener);

    return bindMethod(listener, DisposableLike_dispose);
  }, [value, selectorMemoized, ref]);

  return ref;
}) as UseAnimatedValue["useAnimatedValue"];
