import { MAX_SAFE_INTEGER, __DEV__ } from "../../../__internal__/constants.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mixin1,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __SchedulerImplementationLike_runContinuation as SchedulerImplementationLike_runContinuation,
  __SchedulerImplementationLike_scheduleContinuation as SchedulerImplementationLike_scheduleContinuation,
  __SchedulerImplementationLike_shouldYield as SchedulerImplementationLike_shouldYield,
  __SchedulerImplementationMixin_currentContinuation,
  __SchedulerImplementationMixin_startTime,
  __SchedulerImplementationMixin_yieldRequested,
} from "../../../__internal__/symbols.js";
import {
  ContinuationLike,
  ContinuationLike_activeChild,
  ContinuationLike_parent,
  ContinuationLike_run,
  ContinuationLike_scheduler,
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_schedule,
} from "../../../__internal__/util.js";
import { CollectionLike_count } from "../../../containers.js";
import {
  Optional,
  SideEffect1,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  unsafeCast,
} from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../../util.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Continuation_create from "./Continuation.create.js";
import YieldError from "./Continuation.yieldError.js";

export {
  SchedulerImplementationLike_runContinuation,
  SchedulerImplementationLike_scheduleContinuation,
  SchedulerImplementationLike_shouldYield,
};

export interface SchedulerImplementationLike
  extends SchedulerLike,
    ContinuationSchedulerLike,
    DisposableLike {
  readonly [SchedulerImplementationLike_shouldYield]: boolean;

  [SchedulerImplementationLike_runContinuation](
    continuation: ContinuationLike,
  ): void;

  [SchedulerImplementationLike_scheduleContinuation](
    continuation: ContinuationLike,
    delay: number,
  ): void;
}

type SchedulerImplementationMixin = Omit<
  SchedulerImplementationLike,
  | typeof SchedulerLike_now
  | typeof SchedulerImplementationLike_scheduleContinuation
  | typeof SchedulerImplementationLike_shouldYield
>;

export const SchedulerImplementation_mixin: Mixin1<
  SchedulerImplementationMixin,
  number
> = /*@__PURE__*/ (() => {
  type TSchedulerProperties = {
    [SchedulerLike_maxYieldInterval]: number;
    [__SchedulerImplementationMixin_currentContinuation]: Optional<ContinuationLike>;
    [__SchedulerImplementationMixin_yieldRequested]: boolean;
    [__SchedulerImplementationMixin_startTime]: number;
  };

  const getActiveContinuation = (instance: TSchedulerProperties) => {
    let parent = instance[__SchedulerImplementationMixin_currentContinuation];
    let activeChild = parent?.[ContinuationLike_activeChild];

    while (isSome(activeChild) && activeChild !== parent) {
      parent = activeChild;
      activeChild = parent[ContinuationLike_activeChild];
    }
    return parent;
  };

  return mix(
    include(Disposable_mixin),
    function SchedulerImplementationMixin(
      instance: Pick<
        SchedulerImplementationLike,
        | typeof ContinuationSchedulerLike_schedule
        | typeof SchedulerLike_inContinuation
        | typeof SchedulerLike_requestYield
        | typeof SchedulerLike_schedule
        | typeof SchedulerLike_shouldYield
        | typeof SchedulerLike_yield
        | typeof SchedulerImplementationLike_runContinuation
      > &
        Mutable<TSchedulerProperties>,
      maxYieldInterval: number,
    ): SchedulerImplementationMixin {
      init(Disposable_mixin, instance);

      instance[SchedulerLike_maxYieldInterval] =
        clampPositiveInteger(maxYieldInterval);

      return instance;
    },
    props<TSchedulerProperties>({
      [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
      [__SchedulerImplementationMixin_currentContinuation]: none,
      [__SchedulerImplementationMixin_yieldRequested]: false,
      [__SchedulerImplementationMixin_startTime]: 0,
    }),
    {
      get [SchedulerLike_inContinuation](): boolean {
        unsafeCast<SchedulerImplementationLike & TSchedulerProperties>(this);
        const currentContinuation =
          this[__SchedulerImplementationMixin_currentContinuation];
        return isSome(currentContinuation);
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<TSchedulerProperties & SchedulerImplementationLike>(this);
        const inContinuation = this[SchedulerLike_inContinuation];
        const isDisposed = this[DisposableLike_isDisposed];
        const yieldRequested =
          this[__SchedulerImplementationMixin_yieldRequested];

        return (
          inContinuation &&
          (isDisposed ||
            yieldRequested ||
            //exceededMaxYieldInterval
            this[SchedulerLike_now] >
              this[__SchedulerImplementationMixin_startTime] +
                this[SchedulerLike_maxYieldInterval] ||
            (getActiveContinuation(this)?.[CollectionLike_count] ?? 0) > 0 ||
            this[SchedulerImplementationLike_shouldYield])
        );
      },

      [SchedulerLike_requestYield](this: TSchedulerProperties): void {
        this[__SchedulerImplementationMixin_yieldRequested] = true;
      },

      [ContinuationSchedulerLike_schedule](
        this: SchedulerImplementationLike & TSchedulerProperties,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ): void {
        if (__DEV__ && continuation[ContinuationLike_scheduler] !== this) {
          raiseWithDebugMessage(
            "Attempted to schedule a continuation created on a different scheduler",
          );
        }

        const delay = clampPositiveInteger(options?.delay ?? 0);

        if (continuation[DisposableLike_isDisposed]) {
          return;
        }

        const activeContinuation = getActiveContinuation(this);

        if (
          delay > 0 ||
          isNone(activeContinuation) ||
          activeContinuation[DisposableLike_isDisposed] ||
          // Occurs when the continuation is rescheduling itself
          // and there is no non-disposed parent to enqueue itself onto.
          activeContinuation === continuation ||
          // Occurs when an active continuation is rescheduling its
          // children because it will be disposed.
          continuation[ContinuationLike_parent] === activeContinuation
        ) {
          continuation[ContinuationLike_parent] = none;
          this[SchedulerImplementationLike_scheduleContinuation](
            continuation,
            delay,
          );
        } else {
          activeContinuation[QueueableLike_enqueue](continuation);
        }
      },

      [SchedulerLike_schedule](
        this: SchedulerImplementationLike & TSchedulerProperties,
        effect: SideEffect1<SchedulerLike>,
        options?: { readonly delay?: number },
      ): DisposableLike {
        const continuation = pipe(
          Continuation_create(this, effect),
          Disposable_addTo(this, { ignoreChildErrors: true }),
        );
        this[ContinuationSchedulerLike_schedule](continuation, options);
        return continuation;
      },

      [SchedulerLike_yield](
        this: SchedulerImplementationLike & TSchedulerProperties,
        delay = 0,
      ) {
        const shouldYield = delay > 0 || this[SchedulerLike_shouldYield];

        if (shouldYield) {
          throw newInstance(YieldError, delay);
        }
      },

      [SchedulerImplementationLike_runContinuation](
        this: SchedulerImplementationLike & TSchedulerProperties,
        continuation: ContinuationLike,
      ): void {
        this[__SchedulerImplementationMixin_startTime] =
          this[SchedulerLike_now];
        this[__SchedulerImplementationMixin_currentContinuation] = continuation;
        this[__SchedulerImplementationMixin_yieldRequested] = false;
        continuation[ContinuationLike_run]();
        this[__SchedulerImplementationMixin_yieldRequested] = false;
        this[__SchedulerImplementationMixin_currentContinuation] = none;
      },
    },
  );
})();
