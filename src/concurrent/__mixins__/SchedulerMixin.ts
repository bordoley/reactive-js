import { __DEV__ } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  Mixin,
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
import {
  ContinuationLike,
  ContinuationLike_dueTime,
} from "../__internal__/Continuation.js";
import {
  QueueableContinuationLike,
  QueueableSchedulerMixinBaseLike,
  QueueableSchedulerMixinBaseLike_currentContinuation,
  QueueableSchedulerMixinBaseLike_nextTaskID,
  QueueableSchedulerMixinBaseLike_schedule,
} from "./SchedulerMixin/__private__/QueueableContinuation.js";
import * as QueableContinuation from "./SchedulerMixin/__private__/QueueableContinuation.js";

const SchedulerMixin: Mixin<
  SchedulerLike & DisposableLike,
  SchedulerMixinBaseLike
> = /*@__PURE__*/ (() => {
  const SchedulerMixin_currentContinuation = Symbol(
    "SchedulerMixin_currentContinuation",
  );
  const SchedulerMixin_startTime = Symbol("SchedulerMixin_startTime");
  const SchedulerMixin_taskIDCounter = Symbol("SchedulerMixin_taskIDCounter");
  const SchedulerMixin_yieldRequested = Symbol("SchedulerMixin_yieldRequested");

  type TProperties = {
    [SchedulerMixin_currentContinuation]: Optional<QueueableContinuationLike>;
    [SchedulerMixin_yieldRequested]: boolean;
    [SchedulerMixin_startTime]: number;
    [SchedulerMixin_taskIDCounter]: number;
  };

  return mix<
    SchedulerLike & DisposableLike,
    TProperties,
    Omit<QueueableSchedulerMixinBaseLike, typeof SchedulerLike_now> &
      Pick<
        SchedulerLike,
        | typeof SchedulerLike_inContinuation
        | typeof SchedulerLike_shouldYield
        | typeof SchedulerLike_requestYield
        | typeof SchedulerLike_schedule
      >,
    SchedulerMixinBaseLike & SchedulerLike & DisposableLike
  >(
    include(DisposableMixin),
    function SchedulerMixin(
      instance: SchedulerLike & QueueableSchedulerMixinBaseLike & TProperties,
    ): SchedulerLike & DisposableLike {
      init(DisposableMixin, instance);

      return instance;
    },
    props<TProperties>({
      [SchedulerMixin_currentContinuation]: none,
      [SchedulerMixin_yieldRequested]: false,
      [SchedulerMixin_startTime]: 0,
      [SchedulerMixin_taskIDCounter]: 0,
    }),
    {
      get [QueueableSchedulerMixinBaseLike_currentContinuation](): Optional<QueueableContinuationLike> {
        unsafeCast<TProperties>(this);
        return this[SchedulerMixin_currentContinuation];
      },

      set [QueueableSchedulerMixinBaseLike_currentContinuation](
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

      get [QueueableSchedulerMixinBaseLike_nextTaskID](): number {
        unsafeCast<TProperties>(this);
        return this[SchedulerMixin_taskIDCounter]++;
      },

      get [SchedulerLike_inContinuation](): boolean {
        unsafeCast<SchedulerMixinBaseLike & TProperties>(this);
        const currentContinuation = this[SchedulerMixin_currentContinuation];
        return isSome(currentContinuation);
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<TProperties & SchedulerMixinBaseLike & DisposableLike>(this);

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
              QueueableSchedulerMixinBaseLike_currentContinuation
            ] as QueueableContinuationLike
          )[QueueLike_count] > 0;

        return (
          isDisposed ||
          yieldRequested ||
          exceededMaxYieldInterval ||
          currentContinuationHasScheduledChildren ||
          this[SchedulerMixinBaseLike_shouldYield]
        );
      },

      [SchedulerLike_requestYield](this: TProperties): void {
        this[SchedulerMixin_yieldRequested] = true;
      },

      [QueueableSchedulerMixinBaseLike_schedule](
        this: SchedulerMixinBaseLike &
          QueueableSchedulerMixinBaseLike &
          TProperties,
        continuation: QueueableContinuationLike,
      ): void {
        const activeContinuation =
          this[QueueableSchedulerMixinBaseLike_currentContinuation];

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
          this[SchedulerMixinBaseLike_schedule](continuation);
        } else {
          activeContinuation[QueueableLike_enqueue](continuation);
        }
      },

      [SchedulerLike_schedule](
        this: QueueableSchedulerMixinBaseLike & TProperties & DisposableLike,
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

        this[QueueableSchedulerMixinBaseLike_schedule](continuation);
        return continuation;
      },
    },
  );
})();

export default SchedulerMixin;

export const SchedulerMixinBaseLike_shouldYield = Symbol(
  "SchedulerMixinBaseLike_shouldYield",
);
export const SchedulerMixinBaseLike_schedule = Symbol(
  "SchedulerMixinBaseLike_schedule",
);

export interface SchedulerMixinBaseLike
  extends Pick<
    SchedulerLike,
    typeof SchedulerLike_now | typeof SchedulerLike_maxYieldInterval
  > {
  readonly [SchedulerMixinBaseLike_shouldYield]: boolean;

  [SchedulerMixinBaseLike_schedule](continuation: ContinuationLike): void;
}
