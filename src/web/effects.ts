import { nullObject } from "../__internal__/constants.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike } from "../collections.js";
import * as EventSource from "../computations/EventSource.js";
import {
  __constant,
  __memo,
  __observe,
  __state,
  __stream,
  __using,
} from "../computations/Observable/effects.js";
import * as Streamable from "../computations/Streamable.js";
import {
  EventSourceLike,
  PureSynchronousObservableLike,
} from "../computations.js";
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
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_enqueue,
  SchedulerLike,
} from "../utils.js";
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

  __animation<T>(
    animation: PureSynchronousObservableLike<T>,
    options?: {
      animationScheduler: SchedulerLike;
    },
  ): Streamable.AnimationStreamLike<unknown, T>;

  __animation<TEvent, T>(
    animation:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
    options?: {
      animationScheduler: SchedulerLike;
    },
  ): Streamable.AnimationStreamLike<TEvent, T>;

  __animationGroup<T, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      PureSynchronousObservableLike<T>
    >,
    options?: {
      animationScheduler: SchedulerLike;
    },
  ): Streamable.AnimationGroupStreamLike<unknown, TKey, T>;
  __animationGroup<T, TKey extends string, TEvent>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>
    >,
    options?: {
      animationScheduler: SchedulerLike;
    },
  ): Streamable.AnimationGroupStreamLike<TEvent, TKey, T>;
}

type Signature = WebEffectsModule;

const returnsNone = returns(none);
const makeRefSetter =
  (
    queue: QueueableLike<Updater<Optional<HTMLElement | null>>>,
  ): SideEffect1<HTMLElement | null | undefined> =>
  ele =>
    queue[QueueableLike_enqueue](returns(ele));

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

export const __animation: Signature["__animation"] = <T, TEvent = unknown>(
  animation:
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>,
  options?: {
    animationScheduler: SchedulerLike;
  },
) => {
  const animationScheduler =
    options?.animationScheduler ?? AnimationFrameScheduler.get();

  const animationStreamable = __constant(
    Streamable.animation<T, TEvent>(animation, {
      animationScheduler,
    }),
    animationScheduler,
  );

  return __stream(animationStreamable);
};

export const __animationGroup: Signature["__animationGroup"] = <
  T,
  TKey extends string,
  TEvent,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>
  >,
  options?: {
    animationScheduler: SchedulerLike;
  },
) => {
  const animationScheduler =
    options?.animationScheduler ?? AnimationFrameScheduler.get();

  const animationGroupStreamable = __constant(
    Streamable.animationGroup(animationGroup, {
      animationScheduler,
    }),
    animationScheduler,
  );

  return __stream(animationGroupStreamable);
};
