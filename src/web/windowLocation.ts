import { addAndDisposeParentOnChildError, bindTo } from "../disposable";
import { Updater, pipe, raise } from "../functions";
import {
  AbstractDisposableObservable,
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
}: WindowLocationURI): string => {
  // FIXME: should we put validation in here?
  let uri = path;
  uri = query.length > 0 ? `${uri}?${query}` : uri;
  uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;
  return new URL(uri, window.location.href).toString();
};

const getCurrentWindowLocationURI = (): WindowLocationURI => {
  const uri = new URL(window.location.href);
  return {
    title: document.title,
    path: uri.pathname,
    query: uri.search,
    fragment: uri.hash,
  };
};

type TState = {
  replace: boolean;
  uri: WindowLocationURI;
};

const areWindowLocationStatesEqual = ({ uri: a }: TState, { uri: b }: TState) =>
  // Intentionally ignore the replace flag.
  a === b ||
  (a.title === b.title &&
    a.path === b.path &&
    a.query === b.query &&
    a.fragment === b.fragment);

const windowHistoryReplaceState = (
  self: WindowLocationStream,
  title: string,
  uri: string,
) => {
  window.history.replaceState({ counter: self.historyCounter, title }, "", uri);
};

const windowHistoryPushState = (
  self: WindowLocationStream,
  title: string,
  uri: string,
) => {
  self.historyCounter++;
  window.history.pushState({ counter: self.historyCounter, title }, "", uri);
};

class WindowLocationStream
  extends AbstractDisposableObservable<WindowLocationURI>
  implements WindowLocationStreamLike
{
  historyCounter = -1;

  constructor(readonly stateStream: StateStreamLike<TState>) {
    super();
  }

  get observerCount() {
    return this.stateStream.observerCount;
  }

  dispatch(
    stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
    { replace }: { replace: boolean } = { replace: false },
  ): void {
    this.stateStream.dispatch(({ uri: stateURI }) => {
      const uri =
        typeof stateOrUpdater === "function"
          ? stateOrUpdater(stateURI)
          : stateOrUpdater;
      return { uri, replace };
    });
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
      createStateStore(
        () => ({
          replace: true,
          uri: getCurrentWindowLocationURI(),
        }),
        { equality: areWindowLocationStatesEqual },
      ),
      stream(scheduler, options),
    );

    const windowLocationStream = pipe(
      new WindowLocationStream(stateStream),
      bindTo(stateStream),
    );
    this.currentStream = windowLocationStream;

    const updateBrowserSubscription = pipe(
      stateStream,
      map(({ uri, replace }) => ({
        uri: windowLocationURIToString(uri),
        title: uri.title,
        replace,
      })),
      onNotify(({ uri, title }) => {
        // Initialize the history state on page load
        const isInitialPageLoad = windowLocationStream.historyCounter === -1;
        if (isInitialPageLoad) {
          windowLocationStream.historyCounter++;
          windowHistoryReplaceState(windowLocationStream, title, uri);
        }
      }),
      keep(({ title, uri }) => {
        const titleChanged = document.title !== title;
        const uriChanged = uri !== window.location.href;

        return titleChanged || uriChanged;
      }),
      throttle(100),
      onNotify(({ replace, title, uri }) => {
        const titleChanged = document.title !== title;
        const uriChanged = uri !== window.location.href;

        const shouldReplace = replace || (titleChanged && !uriChanged);

        const updateHistoryState = shouldReplace
          ? windowHistoryReplaceState
          : windowHistoryPushState;

        document.title = title;
        updateHistoryState(windowLocationStream, title, uri);
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
      addAndDisposeParentOnChildError(historySubscription),
      addAndDisposeParentOnChildError(updateBrowserSubscription),
    );
  }
}

export const windowLocation: WindowLocationStreamableLike =
  new WindowLocationStreamable();
