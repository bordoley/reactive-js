import { DisposableLike } from "../disposable";
import { Updater, pipe, raise } from "../functions";
import {
  ObserverLike,
  StreamLike,
  keep,
  onNotify,
  subscribe,
  throttle,
} from "../observable";
import { Option, isNone, none, isSome } from "../option";
import { SchedulerLike } from "../scheduler";
import { createStateStore } from "../stateStore";
import { lift, map, onNotify as onNotifyStream, stream } from "../streamable";
import { HistoryStreamLike, WindowLocationURI } from "../web";
import { fromEvent } from "./event";

const windowLocationURIToString = ({
  path,
  query,
  fragment,
}: WindowLocationURI): string =>
  new URL(`${path}${query}${fragment}`, window.location.href).toString();

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

function getStateStream(
  this: HistoryStream,
): StreamLike<Updater<TState>, WindowLocationURI> {
  const { stateStream } = this;
  return isNone(stateStream)
    ? raise("HistoryStream is not initialized")
    : stateStream;
}

function windowHistoryReplaceState(
  this: HistoryStream,
  uri: WindowLocationURI,
) {
  const { title } = uri;
  window.history.replaceState(
    { counter: this.historyCounter, title },
    "",
    windowLocationURIToString(uri),
  );
}

function windowHistoryPushState(this: HistoryStream, uri: WindowLocationURI) {
  const { title } = uri;
  this.historyCounter++;
  window.history.pushState(
    { counter: this.historyCounter, title },
    "",
    windowLocationURIToString(uri),
  );
}

class HistoryStream implements HistoryStreamLike {
  historyCounter = -1;
  stateStream: Option<StreamLike<Updater<TState>, WindowLocationURI>> = none;

  get isSynchronous() {
    return getStateStream.call(this).isSynchronous;
  }

  dispatch(
    stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
    { replace }: { replace: boolean } = { replace: false },
  ): void {
    const stateStream = getStateStream.call(this);

    stateStream.dispatch(state => {
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

  goBack(): boolean {
    const canGoBack = this.historyCounter > 0;

    if (canGoBack) {
      window.history.back();
    }

    return canGoBack;
  }

  observe(observer: ObserverLike<WindowLocationURI>): void {
    getStateStream.call(this).observe(observer);
  }

  init(scheduler: SchedulerLike): DisposableLike {
    let stateStream = this.stateStream;

    if (isSome(stateStream) && !stateStream.isDisposed) {
      raise("HistoryStream is already initialized");
    }

    stateStream = pipe(
      () => ({
        replace: true,
        uri: getCurrentWindowLocationURI(),
      }),
      createStateStore,
      onNotifyStream(({ uri }) => {
        // Initialize the history state on page load
        const isInitialPageLoad = this.historyCounter === -1;
        if (isInitialPageLoad) {
          this.historyCounter === 0;
          windowHistoryReplaceState.call(this, uri);
        }
      }),
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
      onNotifyStream(({ replace, uri }) => {
        const { title } = uri;

        const uriString = windowLocationURIToString(uri);
        const titleChanged = document.title !== title;
        const uriChanged = uriString !== window.location.href;

        const shouldReplace = replace || (titleChanged && !uriChanged);

        const updateHistoryState = shouldReplace
          ? windowHistoryReplaceState
          : windowHistoryPushState;

        document.title = title;
        updateHistoryState.call(this, uri);
      }),
      map(({ uri }) => uri),
      stream(scheduler),
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
        this.historyCounter = counter;
        this.dispatch(uri, { replace: true });
      }),
      subscribe(scheduler),
    );

    stateStream.add(historySubscription);
    this.stateStream = stateStream;

    return stateStream;
  }
}

export const historyStream: HistoryStreamLike = new HistoryStream();
