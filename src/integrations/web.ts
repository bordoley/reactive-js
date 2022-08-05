import { toObservable } from "../containers/PromiseableLike";
import { keep } from "../containers/ReadonlyArrayLike";
import {
  Function1,
  Option,
  Updater,
  newInstance,
  none,
  pipe,
} from "../functions";
import { ObservableLike, createObservable } from "../rx";
import { sinkInto } from "../rx/ReactiveContainerLike";
import { SchedulerLike } from "../scheduling";
import { dispatch } from "../scheduling/DispatcherLike";
import { getDispatcher } from "../scheduling/ObserverLike";
import { StreamLike, StreamableLike } from "../streaming";
import { dispose, onDisposed, toAbortSignal } from "../util/DisposableLike";

export interface WindowLocationURI {
  title: string;
  // FIXME: Can we enforce non-empty string in the type system
  // should we enforce valid typing to make sure the various strings are
  // rfc compliant?
  path: string;
  query: string;
  fragment: string;
}

export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  dispatch(
    this: WindowLocationStreamLike,
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): void;

  goBack(this: WindowLocationStreamLike): boolean;
}

export interface WindowLocationStreamableLike
  extends StreamableLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI,
    WindowLocationStreamLike
  > {
  stream(
    this: WindowLocationStreamableLike,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): WindowLocationStreamLike;
}

export type FetchRequest = RequestInit & {
  uri: string;
};

const reservedEvents = ["error", "open"];

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
    keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = url instanceof URL ? url.toString() : url;

  return createObservable(observer => {
    const dispatcher = pipe(
      observer,
      getDispatcher,
      onDisposed(_ => {
        for (const ev of events) {
          eventSource.removeEventListener(ev, listener);
        }
        eventSource.close();
      }),
    );

    const eventSource = newInstance(EventSource, requestURL, options);
    const listener = (ev: MessageEvent) => {
      pipe(
        dispatcher,
        dispatch({
          id: ev.lastEventId ?? "",
          type: ev.type ?? "",
          data: ev.data ?? "",
        }),
      );
    };

    for (const ev of events) {
      eventSource.addEventListener(ev, listener);
    }
  });
};

const globalFetch = self.fetch;
export const fetch =
  <T>(
    onResponse: Function1<Response, Promise<T> | ObservableLike<T>>,
  ): Function1<FetchRequest | string, ObservableLike<T>> =>
  fetchRequest =>
    createObservable(async observer => {
      const signal = toAbortSignal(observer);

      let request: Option<string | Request> = none;
      if (typeof fetchRequest === "string") {
        request = fetchRequest;
      } else {
        const { uri, ...requestInit } = fetchRequest;
        request = newInstance(Request, uri, requestInit);
      }

      // This try/catch is necessary because we await in the try block.
      try {
        const response = await globalFetch(request, { signal });

        const onResponseResult = onResponse(response);
        const resultObs =
          onResponseResult instanceof Promise
            ? pipe(onResponseResult, toObservable())
            : onResponseResult;

        pipe(resultObs, sinkInto(observer));
      } catch (cause) {
        pipe(observer, dispose({ cause }));
      }
    });

export const addEventListener =
  <T>(
    eventName: string,
    selector: Function1<Event, T>,
  ): Function1<EventTarget, ObservableLike<T>> =>
  target =>
    createObservable(observer => {
      const dispatcher = pipe(
        observer,
        getDispatcher,
        onDisposed(_ => {
          target.removeEventListener(eventName, listener);
        }),
      );

      const listener = (event: Event) => {
        const result = selector(event);
        pipe(dispatcher, dispatch(result));
      };

      target.addEventListener(eventName, listener, { passive: true });
    });
