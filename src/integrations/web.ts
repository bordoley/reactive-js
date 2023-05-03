import {
  __WindowLocationLike_canGoBack as WindowLocationLike_canGoBack,
  __WindowLocationLike_goBack as WindowLocationLike_goBack,
  __WindowLocationLike_push as WindowLocationLike_push,
  __WindowLocationLike_replace as WindowLocationLike_replace,
} from "../__internal__/symbols.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import { Updater, error, newInstance, pipe } from "../functions.js";
import { MulticastObservableLike, ObservableLike } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { DisposableLike_dispose, QueueableLike_enqueue } from "../util.js";
import * as Disposable from "../util/Disposable.js";

export {
  WindowLocationLike_push,
  WindowLocationLike_goBack,
  WindowLocationLike_canGoBack,
  WindowLocationLike_replace,
};

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
 */
export interface WindowLocationLike
  extends MulticastObservableLike<WindowLocationURI> {
  readonly [WindowLocationLike_canGoBack]: ObservableLike<boolean>;

  [WindowLocationLike_goBack](): void;

  [WindowLocationLike_push](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
  ): void;

  [WindowLocationLike_replace](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
  ): void;
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
  const events = pipe(
    options.events ?? ["message"],
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
      observer[QueueableLike_enqueue]({
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

export type CSSStyleKey = keyof Omit<
  CSSStyleDeclaration,
  | "item"
  | "length"
  | "parentRule"
  | "getPropertyPriority"
  | "getPropertyValue"
  | "removeProperty"
  | "setProperty"
  | number
  | typeof Symbol.iterator
>;

export interface ScrollState {
  readonly current: number;
  readonly progress: number;
  readonly scrollLength: number;
  readonly velocity: number;
  readonly acceleration: number;
}

export interface ScrollValue {
  readonly x: ScrollState;
  readonly y: ScrollState;
}

export interface Rect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}
