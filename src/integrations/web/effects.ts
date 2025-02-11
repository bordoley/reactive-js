import { nullObject } from "../../__internal__/constants.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike } from "../../collections.js";
import {
  __constant,
  __memo,
  __observe,
  __state,
  __stream,
  __using,
} from "../../concurrent/Observable/effects.js";
import * as Streamable from "../../concurrent/Streamable.js";
import {
  AnimationGroupStreamLike,
  PureRunnableLike,
  SchedulerLike,
} from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import { EventSourceLike } from "../../events.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Updater,
  compose,
  identity,
  none,
  pipe,
  returns,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_enqueue,
} from "../../utils.js";
import { CSSStyleMapLike } from "../web.js";
import * as AnimationFrameScheduler from "./AnimationFrameScheduler.js";

interface WebEffectsModule {
  __animate(
    animation: EventSourceLike<CSSStyleMapLike>,
  ): SideEffect1<Optional<HTMLElement | null>>;

  __animate<T>(
    animation: EventSourceLike<T>,
    selector: (ev: T) => CSSStyleMapLike,
  ): SideEffect1<Optional<HTMLElement | null>>;

  __animationFrameScheduler(): SchedulerLike;

  __animationGroup<T, TEvent = unknown, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
    >,
  ): AnimationGroupStreamLike<T, TEvent, TKey>;
}

type Signature = WebEffectsModule;

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
  element != nullObject
    ? pipe(
        animation,
        EventSource.addEventHandler(
          compose(
            selector,
            ReadonlyObjectMap.forEach<string, keyof CSSStyleMapLike>(
              (v, key) => {
                element.style[key] = v ?? "";
              },
            ),
          ),
        ),
      )
    : Disposable.disposed;

export const __animate: Signature["__animate"] = (
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

export const __animationGroup: Signature["__animationGroup"] = <
  T,
  TEvent = unknown,
  TKey extends string = string,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
  >,
) => {
  const animationScheduler = AnimationFrameScheduler.get();

  const animationGroupStreamable = __constant(
    Streamable.animationGroup(animationGroup, {
      animationScheduler,
    }),
    animationScheduler,
  );

  return __stream(animationGroupStreamable);
};
