import { AbstractDisposable } from "../disposable";
import { Updater, pipe, raise } from "../functions";
import {
  ObserverLike,
  StreamLike,
  keep,
  onNotify,
  subscribe,
  throttle,
} from "../observable";
import { Option, none, isNone } from "../option";
import { SchedulerLike } from "../scheduler";
import { createStateStore } from "../stateStore";
import { lift, map, onNotify as onNotifyStream, stream } from "../streamable";
import {
  WindowLocationStreamableLike,
  WindowLocationStreamLike,
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

function windowHistoryReplaceState(
  this: WindowLocationStream,
  uri: WindowLocationURI,
) {
  const { title } = uri;
  window.history.replaceState(
    { counter: this.historyCounter, title },
    "",
    windowLocationURIToString(uri),
  );
}

function windowHistoryPushState(
  this: WindowLocationStream,
  uri: WindowLocationURI,
) {
  const { title } = uri;
  this.historyCounter++;
  window.history.pushState(
    { counter: this.historyCounter, title },
    "",
    windowLocationURIToString(uri),
  );
}

class WindowLocationStream
  extends AbstractDisposable
  implements WindowLocationStreamLike {
  historyCounter = -1;
  readonly stateStream: StreamLike<Updater<TState>, WindowLocationURI>;

  constructor(
    readonly scheduler: SchedulerLike,
    readonly options?: { readonly replay?: number },
  ) {
    super();

    this.stateStream = pipe(
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
      stream(scheduler, options),
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

    this.stateStream.add(historySubscription);
  }

  get isSynchronous() {
    return this.stateStream.isSynchronous;
  }

  get observerCount() {
    return this.stateStream.observerCount;
  }

  dispatch(
    stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
    { replace }: { replace: boolean } = { replace: false },
  ): void {
    const stateStream = this.stateStream;

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
    this.stateStream.observe(observer);
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
      currentStream = new WindowLocationStream(scheduler, options);
      this.currentStream = currentStream;
      return currentStream;
    } else if (
      currentStream.scheduler === scheduler &&
      currentStream.options?.replay === options?.replay
    ) {
      return currentStream;
    } else {
      return raise("Cannot stream more than once");
    }    
  }
}

export const windowLocation: WindowLocationStreamableLike = new WindowLocationStreamable();
