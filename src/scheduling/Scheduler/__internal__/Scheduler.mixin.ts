import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
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
  ContinuationLike,
  ContinuationLike_priority,
  ContinuationLike_run,
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_schedule,
} from "../../../__internal__/scheduling.js";
import {
  __PrioritySchedulerImplementationLike_runContinuation as PrioritySchedulerImplementationLike_runContinuation,
  __PrioritySchedulerImplementationLike_shouldYield as PrioritySchedulerImplementationLike_shouldYield,
  __SchedulerMixin_currentContinuation,
  __SchedulerMixin_startTime,
  __SchedulerMixin_yieldRequested,
} from "../../../__internal__/symbols.js";
import {
  Optional,
  SideEffect1,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../../scheduling.js";
import {
  CollectionLike_count,
  DisposableLike,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Continuation_create from "../../Continuation/__internal__/Continuation.create.js";
import YieldError from "../../Continuation/__internal__/Continuation.yieldError.js";

export {
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
};

export interface PrioritySchedulerImplementationLike
  extends PrioritySchedulerLike,
    ContinuationSchedulerLike,
    DisposableLike {
  readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;

  [PrioritySchedulerImplementationLike_runContinuation](
    continuation: ContinuationLike,
  ): void;

  [SchedulerLike_schedule](
    continuation: SideEffect1<SchedulerLike>,
    options?: {
      /**
       * The amount of time in ms to delay execution of the continuation.
       */
      readonly delay?: number;

      /**
       * The priority to execute the continuation with. The default behavior
       * is implementation specific.
       */
      readonly priority?: number;
    },
  ): DisposableLike;
}

type PrioritySchedulerMixin = Omit<
  PrioritySchedulerImplementationLike,
  | typeof SchedulerLike_now
  | typeof ContinuationSchedulerLike_schedule
  | typeof PrioritySchedulerImplementationLike_shouldYield
>;

export const PriorityScheduler_mixin: Mixin1<PrioritySchedulerMixin, number> =
  /*@__PURE__*/ (() => {
    type TSchedulerProperties = {
      [__SchedulerMixin_yieldRequested]: boolean;
      [__SchedulerMixin_currentContinuation]: Optional<ContinuationLike>;
      [SchedulerLike_maxYieldInterval]: number;
      [__SchedulerMixin_startTime]: number;
    };

    return mix(
      include(Disposable_mixin),
      function SchedulerMixin(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_inContinuation
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
          | typeof SchedulerLike_shouldYield
          | typeof SchedulerLike_yield
          | typeof PrioritySchedulerImplementationLike_runContinuation
        > &
          Mutable<TSchedulerProperties>,
        maxYieldInterval: number,
      ): PrioritySchedulerMixin {
        init(Disposable_mixin, instance);

        instance[SchedulerLike_maxYieldInterval] =
          clampPositiveInteger(maxYieldInterval);

        return instance;
      },
      props<TSchedulerProperties>({
        [__SchedulerMixin_currentContinuation]: none,
        [__SchedulerMixin_yieldRequested]: false,
        [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
        [__SchedulerMixin_startTime]: 0,
      }),
      {
        get [SchedulerLike_inContinuation](): boolean {
          unsafeCast<
            PrioritySchedulerImplementationLike & TSchedulerProperties
          >(this);
          const currentContinuation =
            this[__SchedulerMixin_currentContinuation];
          return isSome(currentContinuation);
        },

        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<
            TSchedulerProperties & PrioritySchedulerImplementationLike
          >(this);
          const currentContinuation =
            this[__SchedulerMixin_currentContinuation];
          const inContinuation = isSome(currentContinuation);

          const currentContinuationHasNestedRequests =
            (currentContinuation?.[CollectionLike_count] ?? 0) > 0;
          const isDisposed = this[DisposableLike_isDisposed];
          const yieldRequested = this[__SchedulerMixin_yieldRequested];

          const exceededMaxYieldInterval =
            this[SchedulerLike_now] >
            this[__SchedulerMixin_startTime] +
              this[SchedulerLike_maxYieldInterval];

          return (
            inContinuation &&
            (isDisposed ||
              yieldRequested ||
              exceededMaxYieldInterval ||
              currentContinuationHasNestedRequests ||
              this[PrioritySchedulerImplementationLike_shouldYield])
          );
        },

        [SchedulerLike_requestYield](this: TSchedulerProperties): void {
          this[__SchedulerMixin_yieldRequested] = true;
        },
        [SchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          effect: SideEffect1<SchedulerLike>,
          options?: { readonly delay?: number; priority?: number },
        ): DisposableLike {
          const delay = clampPositiveInteger(options?.delay ?? 0);
          const { priority = 0 } = options ?? {};
          const continuation = pipe(
            Continuation_create(this, effect, priority),
            Disposable_addToIgnoringChildErrors(this),
          );

          const currentContinuation =
            this[__SchedulerMixin_currentContinuation];

          if (
            delay > 0 ||
            isNone(currentContinuation) ||
            currentContinuation[ContinuationLike_priority] !== priority
          ) {
            this[ContinuationSchedulerLike_schedule](continuation, delay);
          } else {
            currentContinuation[QueueableLike_enqueue](continuation);
          }

          return continuation;
        },

        [SchedulerLike_yield](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          delay = 0,
        ) {
          const shouldYield = delay > 0 || this[SchedulerLike_shouldYield];

          if (shouldYield) {
            throw newInstance(YieldError, delay);
          }
        },

        [PrioritySchedulerImplementationLike_runContinuation](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          continuation: ContinuationLike,
        ): void {
          this[__SchedulerMixin_startTime] = this[SchedulerLike_now];
          this[__SchedulerMixin_currentContinuation] = continuation;
          this[__SchedulerMixin_yieldRequested] = false;
          continuation[ContinuationLike_run]();
          this[__SchedulerMixin_yieldRequested] = false;
          this[__SchedulerMixin_currentContinuation] = none;
        },
      },
    );
  })();
