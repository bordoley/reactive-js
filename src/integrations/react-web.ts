import * as React from "react";
import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { Function1, Optional, Updater, isSome, none } from "../functions.js";
import { QueueableLike_enqueue } from "../util.js";
import { useObservable, useStream } from "./react.js";
import {
  WindowLocationStreamLike,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
  WindowLocationStreamLike_replace,
  WindowLocationURI,
  windowLocation,
} from "./web.js";

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
