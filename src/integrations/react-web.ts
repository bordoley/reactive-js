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
  isSome,
  none,
  pipe,
} from "../functions.js";
import * as Observable from "../rx/Observable.js";
import { StreamableLike_stream } from "../streaming.js";
import { DisposableLike_dispose, QueueableLike_push } from "../util.js";
import * as Disposable from "../util/Disposable.js";
import { useObservable } from "./react.js";
import { createSchedulerWithNormalPriority } from "./scheduler.js";
import {
  WindowLocationStreamLike,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
  WindowLocationStreamLike_replace,
  WindowLocationURI,
  windowLocation,
} from "./web.js";

const WindowLocationContext =
  /*@__PURE__*/ createContext<Optional<WindowLocationStreamLike>>(none);
const emptyWindowLocationURIObservable =
  /*@__PURE__*/ Observable.empty<WindowLocationURI>();

/**
 * @category Hook
 */
export const useWindowLocationStream = (): Optional<WindowLocationStreamLike> =>
  useContext(WindowLocationContext);

/**
 * @category Hook
 */
export const useWindowLocation = (): {
  uri: Optional<WindowLocationURI>;
  push: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
  replace: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
  canGoBack: boolean;
  goBack: () => boolean;
} => {
  const windowLocationStream = useWindowLocationStream();

  const uri = useObservable(
    windowLocationStream ?? emptyWindowLocationURIObservable,
  );

  const stableWindowLocationStreamRef =
    useRef<Optional<WindowLocationStreamLike>>(none);
  useEffect(() => {
    stableWindowLocationStreamRef.current = windowLocationStream;
  }, [windowLocationStream, stableWindowLocationStreamRef]);

  const push = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationStreamRef.current;
      if (isSome(windowLocationStream)) {
        windowLocationStream[QueueableLike_push](action);
      }
    },
    [stableWindowLocationStreamRef],
  );

  const replace = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationStreamRef.current;
      if (isSome(windowLocationStream)) {
        windowLocationStream[WindowLocationStreamLike_replace](action);
      }
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
    windowLocationStream?.[WindowLocationStreamLike_canGoBack] ?? false;

  return {
    uri,
    push,
    replace,
    goBack,
    canGoBack,
  };
};

export const WindowLocationProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }: { children: React.ReactNode }) => {
  const [windowLocationStream, setWindowLocationStream] =
    useState<Optional<WindowLocationStreamLike>>(undefined);

  useEffect(() => {
    const scheduler = createSchedulerWithNormalPriority();

    const stream: WindowLocationStreamLike = pipe(
      // FIXME: Should we have pass a maxBufferSize?
      windowLocation[StreamableLike_stream](scheduler, { replay: 1 }),
      Disposable.addTo(scheduler),
    );

    setWindowLocationStream(stream);

    return () => {
      scheduler[DisposableLike_dispose]();
    };
  }, []);

  return createElement(
    WindowLocationContext.Provider,
    {
      value: windowLocationStream,
    },
    children,
  );
};
