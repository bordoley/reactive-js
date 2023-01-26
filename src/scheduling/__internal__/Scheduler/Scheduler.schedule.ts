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
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import * as CurrentScheduler from "../CurrentScheduler";
import YieldError from "../YieldError";

const isYieldError = (e: unknown): e is YieldError => e instanceof YieldError;

export const createContinuation: Function2<
  SchedulerLike,
  SideEffect,
  ContinuationLike
> = /*@__PURE__*/ (() => {
  type TProperties = {
    readonly scheduler: SchedulerLike;
    readonly f: SideEffect;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function Continuation(
        instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        f: SideEffect,
      ): ContinuationLike {
        init(Disposable_mixin, instance);

        instance.scheduler = scheduler;
        instance.f = f;

        return instance;
      },
      props<TProperties>({
        scheduler: none,
        f: none,
      }),
      {
        [ContinuationLike_run](this: TProperties & ContinuationLike) {
          if (!Disposable_isDisposed(this)) {
            let err: Optional<Error> = none;
            let yieldError: Optional<YieldError> = none;

            const { scheduler } = this;
            const oldCurrentScheduler = CurrentScheduler.getOrNone();
            CurrentScheduler.set(scheduler);
            try {
              this.f();
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
