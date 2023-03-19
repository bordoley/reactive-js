import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import {
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_goBack,
  WindowLocationStream_historyCounter,
} from "../__internal__/symbols.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import {
  Function1,
  Optional,
  Updater,
  compose,
  error,
  isFunction,
  isSome,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  unsafeCast,
} from "../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike_observerCount,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { SchedulerLike } from "../scheduling.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  DisposableLike_dispose,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../util.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_delegatingMixin from "../util/Disposable/__internal__/Disposable.delegatingMixin.js";

export { WindowLocationStreamLike_goBack, WindowLocationStreamLike_canGoBack };

/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
  readonly title: string;
  // FIXME: Can we enforce non-empty string in the type system
  // should we enforce valid typing to make sure the various strings are
  // rfc compliant?
  readonly path: string;
  readonly query: string;
  readonly fragment: string;
}

/**
 * @noInheritDoc
 * @category Container
 */
export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  [QueueableLike_push](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): boolean;

  readonly [WindowLocationStreamLike_canGoBack]: boolean;

  [WindowLocationStreamLike_goBack](): boolean;
}
const errorEvent = "error";

const reservedEvents = [errorEvent, "open"];

export const createEventSource = (
  url: string | URL,
  options: EventSourceInit & {
    readonly events?: readonly string[];
  } = {},
): ObservableLike<{
  readonly id: string;
  readonly type: string;
  readonly data: string;
}> => {
  const { events: eventsOption = ["message"] } = options;
  const events = pipe(
    eventsOption,
    ReadonlyArray.keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = url instanceof URL ? url.toString() : url;

  return Observable.create(observer => {
    pipe(
      observer,
      Disposable.onDisposed(_ => {
        eventSource.removeEventListener(errorEvent, onError);

        for (const ev of events) {
          eventSource.removeEventListener(ev, listener);
        }
        eventSource.close();
      }),
    );

    const eventSource = newInstance(EventSource, requestURL, options);
    const listener = (ev: MessageEvent) => {
      observer[QueueableLike_push]({
        id: ev.lastEventId ?? "",
        type: ev.type ?? "",
        data: ev.data ?? "",
      });
    };

    const onError = (e: unknown) => {
      observer[DisposableLike_dispose](error(e));
    };

    eventSource.addEventListener(errorEvent, onError);

    for (const ev of events) {
      eventSource.addEventListener(ev, listener);
    }
  });
};

export const addEventListener =
  <T>(
    eventName: string,
    selector: Function1<Event, T>,
  ): Function1<EventTarget, ObservableLike<T>> =>
  target =>
    Observable.create(observer => {
      pipe(
        observer,
        Disposable.onDisposed(_ => {
          target.removeEventListener(eventName, listener);
        }),
      );

      const listener = (event: Event) => {
        const result = selector(event);
        observer[QueueableLike_push](result);
      };

      target.addEventListener(eventName, listener, { passive: true });
    });

export const windowLocation: StreamableLike<
  Updater<WindowLocationURI> | WindowLocationURI,
  WindowLocationURI,
  WindowLocationStreamLike
> = /*@__PURE__*/ (() => {
  const { history, location } = window;

  const windowLocationURIToString = ({
    path,
    query,
    fragment,
  }: WindowLocationURI): string => {
    let uri =
      path.length === 0 ? "/" : !path.startsWith("/") ? `/_{path}` : path;
    uri = query.length > 0 ? `${uri}?${query}` : uri;
    uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;
    return newInstance(URL, uri, location.href).toString();
  };

  const getCurrentWindowLocationURI = (): WindowLocationURI => {
    const {
      pathname: path,
      search: query,
      hash: fragment,
    } = newInstance(URL, location.href);
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

  type TAction = {
    replace: boolean;
    stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>;
  };

  const areWindowLocationStatesEqual = (
    { uri: a }: TState,
    { uri: b }: TState,
  ) =>
    // Intentionally ignore the replace flag.
    a === b ||
    (a.title === b.title &&
      a.path === b.path &&
      a.query === b.query &&
      a.fragment === b.fragment);

  const windowHistoryReplaceState = (
    instance: WindowLocationStreamLike & TProperties,
    title: string,
    uri: string,
  ) => {
    history.replaceState(
      { counter: instance[WindowLocationStream_historyCounter], title },
      "",
      uri,
    );
  };

  const windowHistoryPushState = (
    instance: WindowLocationStreamLike & TProperties,
    title: string,
    uri: string,
  ) => {
    instance[WindowLocationStream_historyCounter]++;
    history.pushState(
      { counter: instance[WindowLocationStream_historyCounter], title },
      "",
      uri,
    );
  };

  type TProperties = {
    [WindowLocationStream_historyCounter]: number;
  };

  const createWindowLocationStream = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin()),
      function WindowLocationStream(
        instance: Pick<
          WindowLocationStreamLike,
          | typeof MulticastObservableLike_observerCount
          | typeof DispatcherLike_scheduler
          | typeof DispatcherLike_complete
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
          | typeof QueueableLike_push
          | typeof QueueableLike_maxBufferSize
          | typeof WindowLocationStreamLike_canGoBack
          | typeof WindowLocationStreamLike_goBack
          | typeof ObservableLike_observe
        > &
          Mutable<TProperties>,
        delegate: StreamLike<TAction, TState>,
      ): WindowLocationStreamLike & TProperties {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[WindowLocationStream_historyCounter] = -1;

        return instance;
      },
      props<TProperties>({
        [WindowLocationStream_historyCounter]: -1,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<StreamLike<TAction, TState>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [QueueableLike_maxBufferSize](): number {
          unsafeCast<DelegatingLike<StreamLike<TAction, TState>>>(this);
          return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },

        get [DispatcherLike_scheduler](): SchedulerLike {
          unsafeCast<DelegatingLike<StreamLike<TAction, TState>>>(this);
          return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },

        get [WindowLocationStreamLike_canGoBack](): boolean {
          unsafeCast<TProperties>(this);
          return this[WindowLocationStream_historyCounter] > 0;
        },

        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        [DispatcherLike_complete](
          this: DelegatingLike<StreamLike<TAction, TState>>,
        ) {
          this[DelegatingLike_delegate][DispatcherLike_complete]();
        },

        [QueueableLike_push](
          this: DelegatingLike<StreamLike<TAction, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
          { replace }: { replace: boolean } = { replace: false },
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_push]({
            stateOrUpdater,
            replace,
          });
        },

        [WindowLocationStreamLike_goBack](
          this: WindowLocationStreamLike,
        ): boolean {
          const canGoBack = this[WindowLocationStreamLike_canGoBack];

          if (canGoBack) {
            history.back();
          }

          return canGoBack;
        },

        [ObservableLike_observe](
          this: DelegatingLike<StreamLike<TAction, TState>>,
          observer: ObserverLike<WindowLocationURI>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
            Observable.map(({ uri }) => uri),
            Observable.observeWith(observer),
          );
        },
      },
    ),
  );

  let currentWindowLocationStream: Optional<WindowLocationStreamLike> = none;

  const stream = (
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): WindowLocationStreamLike => {
    if (isSome(currentWindowLocationStream)) {
      raiseWithDebugMessage("Cannot stream more than once");
    }

    const actionReducer = Streamable.createActionReducer(
      ({ uri: stateURI }, { replace, stateOrUpdater }: TAction) => {
        const uri = isFunction(stateOrUpdater)
          ? stateOrUpdater(stateURI)
          : stateOrUpdater;
        return { uri, replace };
      },
      () => ({
        replace: true,
        uri: getCurrentWindowLocationURI(),
      }),
      { equality: areWindowLocationStatesEqual },
    )[StreamableLike_stream](scheduler, options);

    const windowLocationStream = createWindowLocationStream(actionReducer);

    pipe(
      actionReducer,
      Observable.map(({ uri, replace }) => ({
        uri: windowLocationURIToString(uri),
        title: uri.title,
        replace,
      })),
      Observable.forkCombineLatest(
        compose(
          Observable.takeWhile(
            _ =>
              windowLocationStream[WindowLocationStream_historyCounter] === -1,
          ),
          Observable.forEach(({ uri, title }) => {
            // Initialize the history state on page load
            windowLocationStream[WindowLocationStream_historyCounter]++;
            windowHistoryReplaceState(windowLocationStream, title, uri);
          }),
          Observable.ignoreElements(),
        ),
        compose(
          Observable.keep(({ replace, title, uri }) => {
            const titleChanged = document.title !== title;
            const uriChanged = uri !== location.href;

            return replace || (titleChanged && !uriChanged);
          }),
          Observable.throttle(100),
          Observable.forEach(({ title, uri }) => {
            document.title = title;
            windowHistoryReplaceState(windowLocationStream, title, uri);
          }),
          Observable.ignoreElements(),
        ),
        compose(
          Observable.keep(({ replace, uri }) => {
            const uriChanged = uri !== location.href;
            return !replace && uriChanged;
          }),
          Observable.throttle(100),
          Observable.forEach(({ title, uri }) => {
            document.title = title;
            windowHistoryPushState(windowLocationStream, title, uri);
          }),
          Observable.ignoreElements(),
        ),
      ),
      Observable.subscribe(scheduler),
      Disposable.addTo(windowLocationStream),
    );

    pipe(
      window,
      addEventListener("popstate", (e: Event) => {
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
      Observable.forEach(({ counter, uri }) => {
        windowLocationStream[WindowLocationStream_historyCounter] = counter;
        windowLocationStream[QueueableLike_push](uri, { replace: true });
      }),
      Observable.subscribe(scheduler),
      Disposable.addTo(windowLocationStream),
    );

    return windowLocationStream;
  };

  return {
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_isRunnable]: false,
    [StreamableLike_stream]: stream,
  };
})();
