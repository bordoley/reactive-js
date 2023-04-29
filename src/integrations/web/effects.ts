import {
  Optional,
  SideEffect1,
  Updater,
  compose,
  identity,
  none,
  pipe,
  returns,
} from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../keyed-containers.js";
import * as ReadonlyObjectMap from "../../keyed-containers/ReadonlyObjectMap.js";
import { __memo, __observe, __state, __using } from "../../rx/effects.js";
import {
  DisposableLike,
  EventSourceLike,
  QueueableLike,
  QueueableLike_enqueue,
} from "../../util.js";
import * as Disposable from "../../util/Disposable.js";
import * as EventSource from "../../util/EventSource.js";
import { CSSStyleKey } from "../web.js";

const returnsNone = returns(none);
const makeRefSetter =
  (
    dispatcher: QueueableLike<Updater<Optional<HTMLElement | null>>>,
  ): SideEffect1<HTMLElement | null | undefined> =>
  ele =>
    dispatcher[QueueableLike_enqueue](returns(ele));

const animateHtmlElement = <T>(
  element: Optional<HTMLElement | null>,
  animation: EventSourceLike<T>,
  selector: (ev: T) => ReadonlyObjectMapLike<string, CSSStyleKey>,
): DisposableLike =>
  // Just in case a caller sets it to null instead of undefined
  element != null
    ? pipe(
        animation,
        EventSource.addEventHandler(
          compose(
            selector,
            ReadonlyObjectMap.forEachWithKey<string, CSSStyleKey>((v, key) => {
              element.style[key] = v ?? "";
            }),
          ),
        ),
      )
    : Disposable.disposed;

interface Animate {
  __animate(
    animation: EventSourceLike<ReadonlyObjectMapLike<string, CSSStyleKey>>,
  ): SideEffect1<Optional<HTMLElement | null>>;

  __animate<T>(
    animation: EventSourceLike<T>,
    selector: (ev: T) => ReadonlyObjectMapLike<string, CSSStyleKey>,
  ): SideEffect1<Optional<HTMLElement | null>>;
}
export const __animate: Animate["__animate"] = (
  animation: EventSourceLike,
  selector?: (ev: unknown) => ReadonlyObjectMapLike<string, CSSStyleKey>,
): SideEffect1<Optional<HTMLElement | null>> => {
  const htmlElementState = __state<Optional<HTMLElement | null>>(returnsNone);
  const setRef = __memo(makeRefSetter, htmlElementState);
  const htmlElement: Optional<HTMLElement | null> = __observe(htmlElementState);

  __using(
    animateHtmlElement,
    htmlElement,
    animation,
    selector ?? (identity as any),
  );

  return setRef;
};
const defaultSelector = <T>(ev: { event: unknown; value: T }) => ev.value;

interface AnimateEvent {
  __animateEvent(
    animation: EventSourceLike<{
      event: unknown;
      value: ReadonlyObjectMapLike<string, CSSStyleKey>;
    }>,
  ): SideEffect1<Optional<HTMLElement | null>>;

  __animateEvent<TEvent, T>(
    animation: EventSourceLike<{ event: TEvent; value: T }>,
    selector: (ev: {
      event: TEvent;
      value: T;
    }) => ReadonlyObjectMapLike<string, CSSStyleKey>,
  ): SideEffect1<Optional<HTMLElement | null>>;
}
export const __animateEvent: AnimateEvent["__animateEvent"] = <TEvent, T>(
  animation: EventSourceLike<{ event: TEvent; value: T }>,
  selector?: (ev: {
    event: TEvent;
    value: T;
  }) => ReadonlyObjectMapLike<string, CSSStyleKey>,
): SideEffect1<Optional<HTMLElement | null>> => {
  return __animate(animation, selector ?? (defaultSelector as any));
};
