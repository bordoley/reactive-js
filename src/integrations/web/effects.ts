import {
  DisposableLike,
  EventSourceLike,
  QueueableLike,
  QueueableLike_enqueue,
} from "../../core.js";
import * as Disposable from "../../core/Disposable.js";
import * as EventSource from "../../core/EventSource.js";
import {
  __constant,
  __memo,
  __observe,
  __state,
  __using,
} from "../../core/Observable/effects.js";
import * as ReadonlyObjectMap from "../../core/ReadonlyObjectMap.js";
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
import { CSSStyleMapLike } from "../web.js";

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
  selector: (ev: T) => CSSStyleMapLike,
): DisposableLike =>
  // Just in case a caller sets it to null instead of undefined
  element != null
    ? pipe(
        animation,
        EventSource.addEventHandler(
          compose(
            selector,
            ReadonlyObjectMap.forEachWithKey<string, keyof CSSStyleMapLike>(
              (v, key) => {
                element.style[key] = v ?? "";
              },
            ),
          ),
        ),
      )
    : Disposable.disposed;

interface Animate {
  __animate(
    animation: EventSourceLike<CSSStyleMapLike>,
  ): SideEffect1<Optional<HTMLElement | null>>;

  __animate<T>(
    animation: EventSourceLike<T>,
    selector: (ev: T) => CSSStyleMapLike,
  ): SideEffect1<Optional<HTMLElement | null>>;
}
export const __animate: Animate["__animate"] = (
  animation: EventSourceLike,
  selector?: (ev: unknown) => CSSStyleMapLike,
): SideEffect1<Optional<HTMLElement | null>> => {
  const memoizedSelector = __constant(selector);
  const htmlElementState = __state<Optional<HTMLElement | null>>(returnsNone);
  const setRef = __memo(makeRefSetter, htmlElementState);
  const htmlElement: Optional<HTMLElement | null> = __observe(htmlElementState);

  __using(
    animateHtmlElement,
    htmlElement,
    animation,
    memoizedSelector ?? (identity as any),
  );

  return setRef;
};
