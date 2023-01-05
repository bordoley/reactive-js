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
import { DisposableLike, Exception } from "../../../util";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
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
      include(DisposableLike__mixin),
      function Continuation(
        instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        f: SideEffect,
      ): ContinuationLike {
        init(DisposableLike__mixin, instance);

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
          if (!DisposableLike__isDisposed(this)) {
            let error: Optional<Exception> = none;
            let yieldError: Optional<YieldError> = none;

            const { scheduler } = this;
            const oldCurrentScheduler = CurrentScheduler.getOrNone();
            CurrentScheduler.set(scheduler);
            try {
              this.f();
            } catch (cause) {
              if (isYieldError(cause)) {
                yieldError = cause;
              } else {
                error = { cause };
              }
            }
            CurrentScheduler.set(oldCurrentScheduler);

            if (isSome(yieldError)) {
              pipe(scheduler, SchedulerLike__schedule(this, yieldError));
            } else {
              pipe(this, DisposableLike__dispose(error));
            }
          }
        },
      },
    ),
  );
})();

const SchedulerLike__schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation = isFunction(f) ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };

export default SchedulerLike__schedule;
