import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  Function2,
  Optional,
  SideEffect,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  raiseWithDebugMessage,
} from "../../../functions.js";
import {
  ContinuationLike,
  ContinuationLike_run,
  ContinuationLike_scheduler,
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";

class YieldError {
  constructor(readonly delay: number) {}
}

const Continuation_effect = Symbol("Continuation_effect");

type TProperties = {
  readonly [ContinuationLike_scheduler]: SchedulerLike;
  readonly [Continuation_effect]: SideEffect;
};

let currentContinuation: Optional<ContinuationLike & TProperties> = none;

export const Continuation__getCurrentContinuation: () => Optional<ContinuationLike> =
  () => currentContinuation;

export const Continuation__yield = (delay = 0) => {
  const continuation = isNone(currentContinuation)
    ? raiseWithDebugMessage<ContinuationLike & TProperties>(
        "not in continuation",
      )
    : currentContinuation;

  if (
    delay > 0 ||
    continuation[ContinuationLike_scheduler][SchedulerLike_shouldYield]
  ) {
    throw newInstance(YieldError, delay);
  }
};

export const Continuation__now = () => {
  const continuation = isNone(currentContinuation)
    ? raiseWithDebugMessage<ContinuationLike & TProperties>(
        "not in continuation",
      )
    : currentContinuation;
  return continuation[ContinuationLike_scheduler][SchedulerLike_now];
};

const Continuation_create: Function2<
  SchedulerLike,
  SideEffect,
  ContinuationLike
> = /*@__PURE__*/ (() =>
  createInstanceFactory(
    mix(
      include(
        Disposable_mixin,
        IndexedQueue_fifoQueueMixin<ContinuationLike>(),
      ),
      function Continuation(
        instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        effect: SideEffect,
      ): ContinuationLike {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin<ContinuationLike>(), instance);

        instance[ContinuationLike_scheduler] = scheduler;
        instance[Continuation_effect] = effect;

        return instance;
      },
      props<TProperties>({
        [ContinuationLike_scheduler]: none,
        [Continuation_effect]: none,
      }),
      {
        [ContinuationLike_run](
          this: TProperties &
            ContinuationLike &
            PullableQueueLike<ContinuationLike>,
        ) {
          if (!this[DisposableLike_isDisposed]) {
            let err: Optional<Error> = none;
            let yieldError: Optional<YieldError> = none;
            let shouldYield = false;

            const oldContinuation = currentContinuation;

            // eslint-disable-next-line @typescript-eslint/no-this-alias
            currentContinuation = this;

            // Run any inner continuations first.
            let head: Optional<ContinuationLike> = none;
            while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
              if (!head[DisposableLike_isDisposed]) {
                head[ContinuationLike_run]();
              }

              shouldYield =
                this[ContinuationLike_scheduler][SchedulerLike_shouldYield];

              if (shouldYield) {
                currentContinuation = oldContinuation;
                this[ContinuationLike_scheduler][SchedulerLike_schedule](this);
                return;
              }
            }

            try {
              this[Continuation_effect]();
            } catch (e) {
              if (e instanceof YieldError) {
                yieldError = e;
              } else {
                err = error(e);
              }
            }

            currentContinuation = oldContinuation;

            if (isSome(yieldError) && yieldError.delay > 0) {
              while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                this[ContinuationLike_scheduler][SchedulerLike_schedule](head);
              }
            }

            if (isSome(yieldError)) {
              this[ContinuationLike_scheduler][SchedulerLike_schedule](
                this,
                yieldError,
              );
            } else {
              let head: Optional<ContinuationLike> = none;
              while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                this[ContinuationLike_scheduler][SchedulerLike_schedule](head);
              }

              this[DisposableLike_dispose](err);
            }
          }
        },
      },
    ),
  ))();

export default Continuation_create;
