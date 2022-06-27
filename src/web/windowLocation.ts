import { ignoreElements } from "../container";
import { addTo, bindTo } from "../disposable";
import { Updater, compose, pipe, raise } from "../functions";
import {
  AbstractDisposableObservable,
  Observer,
  forkCombineLatest,
  keep,
  keepT,
  map,
  onNotify,
  subscribe,
  takeWhile,
  throttle,
} from "../observable";
import { Option, isSome, none } from "../option";
import { sinkInto } from "../source";
import {
  StateStreamLike,
  createStateStore,
  createStreamble,
  stream,
} from "../streamable";
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
  let uri = path.length === 0 ? "/" : path;
  uri = query.length > 0 ? `${uri}?${query}` : uri;
  uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;
  return new URL(uri, window.location.href).toString();
};

const getCurrentWindowLocationURI = (): WindowLocationURI => {
  const {
    pathname: path,
    search: query,
    hash: fragment,
  } = new URL(window.location.href);
  return {
    title: document.title,
    path,
    query: query.slice(1),
    fragment: fragment.slice(1),
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

let currentWindowLocationStream: Option<WindowLocationStream> = none;

type TSerializedState = {
  uri: string;
  title: string;
  replace: boolean;
};

export const windowLocation: WindowLocationStreamableLike = createStreamble(
  (scheduler, options): WindowLocationStreamLike => {
    if (isSome(currentWindowLocationStream)) {
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

    pipe(
      stateStream,
      map(({ uri, replace }) => ({
        uri: windowLocationURIToString(uri),
        title: uri.title,
        replace,
      })),
      forkCombineLatest(
        compose(
          takeWhile<TSerializedState>(
            _ => windowLocationStream.historyCounter === -1,
          ),
          onNotify(({ uri, title }) => {
            // Initialize the history state on page load
            windowLocationStream.historyCounter++;
            windowHistoryReplaceState(windowLocationStream, title, uri);
          }),
          ignoreElements(keepT),
        ),
        compose(
          keep<TSerializedState>(({ replace, title, uri }) => {
            const titleChanged = document.title !== title;
            const uriChanged = uri !== window.location.href;

            return replace || (titleChanged && !uriChanged);
          }),
          throttle(100),
          onNotify(({ title, uri }) => {
            document.title = title;
            windowHistoryReplaceState(windowLocationStream, title, uri);
          }),
          ignoreElements(keepT),
        ),
        compose(
          keep<TSerializedState>(({ replace, uri }) => {
            const uriChanged = uri !== window.location.href;
            return !replace && uriChanged;
          }),
          throttle(100),
          onNotify(({ title, uri }) => {
            document.title = title;
            windowHistoryPushState(windowLocationStream, title, uri);
          }),
          ignoreElements(keepT),
        ),
      ),
      subscribe(scheduler),
      addTo(windowLocationStream),
    );

    pipe(
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
      addTo(windowLocationStream),
    );

    return windowLocationStream;
  },
);
