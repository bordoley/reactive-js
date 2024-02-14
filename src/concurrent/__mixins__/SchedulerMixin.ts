import { MAX_SAFE_INTEGER, __DEV__ } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  Mixin1,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  ContinuationContextLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../concurrent.js";
import {
  Optional,
  SideEffect1,
  isNone,
  isSome,
  none,
  pipe,
  raiseIf,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  QueueLike_count,
  QueueableLike_enqueue,
} from "../../utils.js";
import { ContinuationLike_dueTime } from "../__internal__/Continuation.js";
import {
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_schedule,
  ContinuationSchedulerLike_shouldYield,
} from "../__internal__/ContinuationScheduler.js";
import {
  QueueableContinuationLike,
  QueueableContinuationSchedulerLike,
  QueueableContinuationSchedulerLike_currentContinuation,
  QueueableContinuationSchedulerLike_nextTaskID,
  QueueableContinuationSchedulerLike_schedule,
} from "./SchedulerMixin/__private__/QueueableContinuation.js";
import * as QueableContinuation from "./SchedulerMixin/__private__/QueueableContinuation.js";

const SchedulerMixin: Mixin1<
  SchedulerLike & DisposableLike,
  number,
  ContinuationSchedulerLike
> = /*@__PURE__*/ (() => {
  const SchedulerMixin_currentContinuation = Symbol(
    "SchedulerMixin_currentContinuation",
  );
  const SchedulerMixin_startTime = Symbol("SchedulerMixin_startTime");
  const SchedulerMixin_taskIDCounter = Symbol("SchedulerMixin_taskIDCounter");
  const SchedulerMixin_yieldRequested = Symbol("SchedulerMixin_yieldRequested");

  type TProperties = {
    [SchedulerMixin_currentContinuation]: Optional<QueueableContinuationLike>;
    [SchedulerLike_maxYieldInterval]: number;
    [SchedulerMixin_yieldRequested]: boolean;
    [SchedulerMixin_startTime]: number;
    [SchedulerMixin_taskIDCounter]: number;
  };

  return mix<
    SchedulerLike & DisposableLike,
    TProperties,
    Omit<QueueableContinuationSchedulerLike, typeof SchedulerLike_now> &
      Pick<
        SchedulerLike,
        | typeof SchedulerLike_inContinuation
        | typeof SchedulerLike_shouldYield
        | typeof SchedulerLike_requestYield
        | typeof SchedulerLike_schedule
      >,
    ContinuationSchedulerLike & SchedulerLike & DisposableLike,
    number
  >(
    include(DisposableMixin),
    function SchedulerMixin(
      instance: SchedulerLike &
        QueueableContinuationSchedulerLike &
        TProperties,
      maxYieldInterval: number,
    ): SchedulerLike & DisposableLike {
      init(DisposableMixin, instance);

      instance[SchedulerLike_maxYieldInterval] =
        clampPositiveInteger(maxYieldInterval);

      return instance;
    },
    props<TProperties>({
      [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
      [SchedulerMixin_currentContinuation]: none,
      [SchedulerMixin_yieldRequested]: false,
      [SchedulerMixin_startTime]: 0,
      [SchedulerMixin_taskIDCounter]: 0,
    }),
    {
      get [QueueableContinuationSchedulerLike_currentContinuation](): Optional<QueueableContinuationLike> {
        unsafeCast<TProperties>(this);
        return this[SchedulerMixin_currentContinuation];
      },

      set [QueueableContinuationSchedulerLike_currentContinuation](
        continuation: Optional<QueueableContinuationLike>,
      ) {
        unsafeCast<TProperties & SchedulerLike>(this);

        const oldCurrentContinuation = this[SchedulerMixin_currentContinuation];

        this[SchedulerMixin_currentContinuation] = continuation;

        // A QueueableContinuationLike may run inner continuations that will
        // set the currentContinuation to themselves, but we don't want to
        // reset the startTime or yieldRequested flags in this case since these
        // should be honored for the duration of the time that the synchronous
        // parent continuation is active.
        if (isNone(oldCurrentContinuation)) {
          this[SchedulerMixin_startTime] = this[SchedulerLike_now];
          this[SchedulerMixin_yieldRequested] = false;
        }
      },

      get [QueueableContinuationSchedulerLike_nextTaskID](): number {
        unsafeCast<TProperties>(this);
        return this[SchedulerMixin_taskIDCounter]++;
      },

      get [SchedulerLike_inContinuation](): boolean {
        unsafeCast<ContinuationSchedulerLike & TProperties>(this);
        const currentContinuation = this[SchedulerMixin_currentContinuation];
        return isSome(currentContinuation);
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<TProperties & ContinuationSchedulerLike & DisposableLike>(
          this,
        );

        if (__DEV__) {
          const inContinuation = this[SchedulerLike_inContinuation];

          raiseIf(
            !inContinuation,
            "shouldYield may only be called from within a scheduler continuation",
          );
        }

        const isDisposed = this[DisposableLike_isDisposed];
        const yieldRequested = this[SchedulerMixin_yieldRequested];
        const exceededMaxYieldInterval =
          this[SchedulerLike_now] >
          this[SchedulerMixin_startTime] + this[SchedulerLike_maxYieldInterval];
        const currentContinuationHasScheduledChildren =
          (
            this[
              QueueableContinuationSchedulerLike_currentContinuation
            ] as QueueableContinuationLike
          )[QueueLike_count] > 0;

        return (
          isDisposed ||
          yieldRequested ||
          exceededMaxYieldInterval ||
          currentContinuationHasScheduledChildren ||
          this[ContinuationSchedulerLike_shouldYield]
        );
      },

      [SchedulerLike_requestYield](this: TProperties): void {
        this[SchedulerMixin_yieldRequested] = true;
      },

      [QueueableContinuationSchedulerLike_schedule](
        this: ContinuationSchedulerLike &
          QueueableContinuationSchedulerLike &
          TProperties,
        continuation: QueueableContinuationLike,
      ): void {
        const activeContinuation =
          this[QueueableContinuationSchedulerLike_currentContinuation];

        const now = this[SchedulerLike_now];
        const dueTime = continuation[ContinuationLike_dueTime];

        if (
          dueTime > now ||
          isNone(activeContinuation) ||
          activeContinuation[DisposableLike_isDisposed] ||
          // Occurs when the continuation is rescheduling itself
          // and there is no non-disposed parent to enqueue itself onto.
          activeContinuation === continuation ||
          // Occurs when an active continuation is rescheduling its
          // children because it has been rescheduled in the future.
          activeContinuation[ContinuationLike_dueTime] > now
        ) {
          this[ContinuationSchedulerLike_schedule](continuation);
        } else {
          activeContinuation[QueueableLike_enqueue](continuation);
        }
      },

      [SchedulerLike_schedule](
        this: QueueableContinuationSchedulerLike & TProperties & DisposableLike,
        effect: SideEffect1<ContinuationContextLike>,
        options?: { readonly delay?: number },
      ): DisposableLike {
        if (this[DisposableLike_isDisposed]) {
          return Disposable.disposed;
        }

        const dueTime =
          this[SchedulerLike_now] + clampPositiveInteger(options?.delay ?? 0);

        const continuation = pipe(
          QueableContinuation.create(this, effect, dueTime),
          Disposable.addToContainer(this),
        );

        this[QueueableContinuationSchedulerLike_schedule](continuation);
        return continuation;
      },
    },
  );
})();

export default SchedulerMixin;
