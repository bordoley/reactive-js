import {
  DisposableOrTeardown,
  Error,
  addDisposableDisposeParentOnChildError,
} from "../disposable";
import { Updater, pipe, raise } from "../functions";
import {
  Observer,
  StreamLike,
  keep,
  map,
  onNotify,
  subscribe,
  throttle,
} from "../observable";
import { Option, isNone, none } from "../option";
import { SchedulerLike } from "../scheduler";
import { AbstractSource } from "../source";
import { createStateStore, lift, stream } from "../streamable";
import {
  WindowLocationStreamLike,
  WindowLocationStreamableLike,
  WindowLocationURI,
} from "../web";
import { fromEvent } from "./event";

const windowLocationURIToString = ({
  path,
  query,
  fragment,
}: WindowLocationURI): string =>
  new URL(`${path}?${query}#${fragment}`, window.location.href).toString();

const getCurrentWindowLocationURI = (): WindowLocationURI => {
  const uri = new URL(window.location.href);
  return {
    title: document.title,
    path: uri.pathname,
    query: uri.search,
    fragment: uri.hash,
  };
};

const areWindowLocationURIsEqual = (
  a: WindowLocationURI,
  b: WindowLocationURI,
) =>
  a === b ||
  (a.title === b.title &&
    a.path === b.path &&
    a.query === b.query &&
    a.fragment === b.fragment);

type TState = {
  replace: boolean;
  uri: WindowLocationURI;
};

const windowHistoryReplaceState = (
  self: WindowLocationStream,
  uri: WindowLocationURI,
) => {
  const { title } = uri;
  window.history.replaceState(
    { counter: self.historyCounter, title },
    "",
    windowLocationURIToString(uri),
  );
};

const windowHistoryPushState = (
  self: WindowLocationStream,
  uri: WindowLocationURI,
) => {
  const { title } = uri;
  self.historyCounter++;
  window.history.pushState(
    { counter: self.historyCounter, title },
    "",
    windowLocationURIToString(uri),
  );
};

class WindowLocationStream
  extends AbstractSource<WindowLocationURI, Observer<WindowLocationURI>>
  implements WindowLocationStreamLike
{
  historyCounter = -1;

  constructor(
    readonly stateStream: StreamLike<Updater<TState>, WindowLocationURI>,
  ) {
    super();
  }

  get error() {
    return this.stateStream.error;
  }

  get isDisposed() {
    return this.stateStream.isDisposed;
  }

  get isSynchronous() {
    return this.stateStream.isSynchronous;
  }

  get observerCount() {
    return this.stateStream.observerCount;
  }

  add(disposable: DisposableOrTeardown): void {
    this.stateStream.add(disposable);
  }

  dispatch(
    stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
    { replace }: { replace: boolean } = { replace: false },
  ): void {
    this.stateStream.dispatch(state => {
      const { uri: stateURI } = state;
      const newURI =
        typeof stateOrUpdater === "function"
          ? stateOrUpdater(stateURI)
          : stateOrUpdater;
      return areWindowLocationURIsEqual(stateURI, newURI)
        ? state
        : {
            uri: newURI,
            replace,
          };
    });
  }

  dispose(error?: Error): void {
    this.stateStream.dispose(error);
  }

  goBack(): boolean {
    const canGoBack = this.historyCounter > 0;

    if (canGoBack) {
      window.history.back();
    }

    return canGoBack;
  }

  sink(observer: Observer<WindowLocationURI>): void {
    this.stateStream.sink(observer);
  }
}

class WindowLocationStreamable implements WindowLocationStreamableLike {
  currentStream: Option<WindowLocationStream> = none;

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): WindowLocationStreamLike {
    let { currentStream } = this;

    if (isNone(currentStream)) {
      const stateStream = pipe(
        () => ({
          replace: true,
          uri: getCurrentWindowLocationURI(),
        }),
        createStateStore,
        lift(
          onNotify(({ uri }) => {
            // Initialize the history state on page load
            const isInitialPageLoad =
              windowLocationStream.historyCounter === -1;
            if (isInitialPageLoad) {
              windowLocationStream.historyCounter === 0;
              windowHistoryReplaceState(windowLocationStream, uri);
            }
          }),
        ),
        lift(
          keep(({ uri }) => {
            const { title } = uri;

            const uriString = windowLocationURIToString(uri);
            const titleChanged = document.title !== title;
            const uriChanged = uriString !== window.location.href;

            return titleChanged || uriChanged;
          }),
        ),
        lift(throttle(300)),
        lift(
          onNotify(({ replace, uri }) => {
            const { title } = uri;

            const uriString = windowLocationURIToString(uri);
            const titleChanged = document.title !== title;
            const uriChanged = uriString !== window.location.href;

            const shouldReplace = replace || (titleChanged && !uriChanged);

            const updateHistoryState = shouldReplace
              ? windowHistoryReplaceState
              : windowHistoryPushState;

            document.title = title;
            updateHistoryState(windowLocationStream, uri);
          }),
        ),
        lift(map(({ uri }) => uri)),
        stream(scheduler, options),
      );

      const windowLocationStream = new WindowLocationStream(stateStream);

      const historySubscription = pipe(
        fromEvent(window, "popstate", (e: Event) => {
          const { counter, title } = (e as any).state as {
            counter: number;
            title: string;
          };

          const uri = {
            ...getCurrentWindowLocationURI(),
            title,
          };

          return { counter, uri };
        }),
        onNotify(({ counter, uri }) => {
          windowLocationStream.historyCounter = counter;
          windowLocationStream.dispatch(uri, { replace: true });
        }),
        subscribe(scheduler),
      );

      addDisposableDisposeParentOnChildError(
        windowLocationStream,
        historySubscription,
      );

      return windowLocationStream;
    } else {
      return raise("Cannot stream more than once");
    }
  }
}

export const windowLocation: WindowLocationStreamableLike =
  new WindowLocationStreamable();
