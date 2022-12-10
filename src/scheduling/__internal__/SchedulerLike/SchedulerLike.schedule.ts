import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../../../__internal__/mixins";
import { disposableMixin } from "../../../__internal__/util/DisposableLike.mixins";
import {
  Function1,
  Function2,
  Option,
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
import { dispose, isDisposed } from "../../../util/DisposableLike";
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
    mixin(
      include(disposableMixin),
      function Continuation(
        instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        f: SideEffect,
      ): ContinuationLike {
        init(disposableMixin, instance);

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
          if (!isDisposed(this)) {
            let error: Option<Exception> = none;
            let yieldError: Option<YieldError> = none;

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
              pipe(scheduler, schedule(this, yieldError));
            } else {
              pipe(this, dispose(error));
            }
          }
        },
      },
    ),
  );
})();

const schedule =
  (
    f: SideEffect | ContinuationLike,
    options?: { readonly delay?: number },
  ): Function1<SchedulerLike, DisposableLike> =>
  scheduler => {
    const continuation = isFunction(f) ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
  };

export default schedule;
