import {
  DisposableOrTeardown,
  Error,
  addDisposeOnChildError,
  dispose,
} from "../disposable";
import { Updater, pipe, raise } from "../functions";
import {
  AbstractObservable,
  Observer,
  keep,
  map,
  onNotify,
  subscribe,
  throttle,
} from "../observable";
import { Option, isSome, none } from "../option";
import { SchedulerLike } from "../scheduler";
import { sinkInto } from "../source";
import { StateStreamLike, createStateStore, stream } from "../streamable";
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
  extends AbstractObservable<WindowLocationURI>
  implements WindowLocationStreamLike
{
  historyCounter = -1;

  constructor(readonly stateStream: StateStreamLike<TState>) {
    super();
  }

  get error() {
    return this.stateStream.error;
  }

  get isDisposed() {
    return this.stateStream.isDisposed;
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
    pipe(this.stateStream, dispose(error));
  }

  goBack(): boolean {
    const canGoBack = this.historyCounter > 0;

    if (canGoBack) {
      window.history.back();
    }

    return canGoBack;
  }

  sink(observer: Observer<WindowLocationURI>): void {
    pipe(
      this.stateStream,
      map(({ uri }) => uri),
      sinkInto(observer),
    );
  }
}

class WindowLocationStreamable implements WindowLocationStreamableLike {
  currentStream: Option<WindowLocationStream> = none;

  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): WindowLocationStreamLike {
    let { currentStream } = this;

    if (isSome(currentStream)) {
      raise("Cannot stream more than once");
    }

    const stateStream = pipe(
      createStateStore(() => ({
        replace: true,
        uri: getCurrentWindowLocationURI(),
      })),
      stream(scheduler, options),
    );

    const windowLocationStream = new WindowLocationStream(stateStream);

    const updateBrowserSubscription = pipe(
      stateStream,
      onNotify(({ uri }) => {
        // Initialize the history state on page load
        const isInitialPageLoad = windowLocationStream.historyCounter === -1;
        if (isInitialPageLoad) {
          windowLocationStream.historyCounter++;
          windowHistoryReplaceState(windowLocationStream, uri);
        }
      }),
      keep(({ uri }) => {
        const { title } = uri;

        const uriString = windowLocationURIToString(uri);
        const titleChanged = document.title !== title;
        const uriChanged = uriString !== window.location.href;

        return titleChanged || uriChanged;
      }),
      throttle(100),
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
      subscribe(scheduler),
    );

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

    return pipe(
      windowLocationStream,
      addDisposeOnChildError(historySubscription),
      addDisposeOnChildError(updateBrowserSubscription),
    );
  }
}

export const windowLocation: WindowLocationStreamableLike =
  new WindowLocationStreamable();
