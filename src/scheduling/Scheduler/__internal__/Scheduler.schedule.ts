import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  Function1,
  Function2,
  Optional,
  SideEffect,
  error,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions";
import {
  ContinuationLike,
  ContinuationLike_run,
  SchedulerLike,
  SchedulerLike_schedule,
} from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import * as CurrentScheduler from "../../__internal__/CurrentScheduler";
import YieldError from "../../__internal__/YieldError";

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

export const createContinuation: Function2<
  SchedulerLike,
  SideEffect,
  ContinuationLike
> = /*@__PURE__*/ (() => {
  const Continuation_scheduler = Symbol("Continuation_scheduler");
  const Continuation_effect = Symbol("Continuation_effect");

  type TProperties = {
    readonly [Continuation_scheduler]: SchedulerLike;
    readonly [Continuation_effect]: SideEffect;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function Continuation(
        instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        effect: SideEffect,
      ): ContinuationLike {
        init(Disposable_mixin, instance);

        instance[Continuation_scheduler] = scheduler;
        instance[Continuation_effect] = effect;

        return instance;
      },
      props<TProperties>({
        [Continuation_scheduler]: none,
        [Continuation_effect]: none,
      }),
      {
        [ContinuationLike_run](this: TProperties & ContinuationLike) {
          if (!Disposable_isDisposed(this)) {
            let err: Optional<Error> = none;
            let yieldError: Optional<YieldError> = none;

            const { [Continuation_scheduler]: scheduler } = this;
            const oldCurrentScheduler = CurrentScheduler.getOrNone();
            CurrentScheduler.set(scheduler);
            try {
              this[Continuation_effect]();
            } catch (e) {
              if (isYieldError(e)) {
                yieldError = e;
              } else {
                err = error(e);
              }
            }
            CurrentScheduler.set(oldCurrentScheduler);

            if (isSome(yieldError)) {
              pipe(scheduler, Scheduler_schedule(this, yieldError));
            } else {
              pipe(this, Disposable_dispose(err));
            }
          }
        },
      },
    ),
  );
})();

const Scheduler_schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation = isFunction(f) ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };

export default Scheduler_schedule;
