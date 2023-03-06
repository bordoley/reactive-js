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
  pipe,
  raiseWithDebugMessage,
} from "../../../functions.js";
import {
  ContinuationLike,
  ContinuationLike_run,
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

class YieldError {
  constructor(readonly delay: number) {}
}

const Continuation_effect = Symbol("Continuation_effect");
const Continuation_scheduler = Symbol("Continuation_scheduler");

type TProperties = {
  readonly [Continuation_scheduler]: SchedulerLike;
  readonly [Continuation_effect]: SideEffect;
};

let currentContinuation: Optional<ContinuationLike & TProperties> = none;

export const Continuation__yield = (delay = 0) => {
  const continuation = isNone(currentContinuation)
    ? raiseWithDebugMessage<ContinuationLike & TProperties>(
        "not in continuation",
      )
    : currentContinuation;

  if (
    delay > 0 ||
    continuation[Continuation_scheduler][SchedulerLike_shouldYield]
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
  return continuation[Continuation_scheduler][SchedulerLike_now];
};

const Continuation_create: Function2<
  SchedulerLike,
  SideEffect,
  ContinuationLike
> = /*@__PURE__*/ (() =>
  createInstanceFactory(
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
          if (!this[DisposableLike_isDisposed]) {
            let err: Optional<Error> = none;
            let yieldError: Optional<YieldError> = none;

            const oldContinuation = currentContinuation;

            // eslint-disable-next-line @typescript-eslint/no-this-alias
            currentContinuation = this;

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

            if (isSome(yieldError)) {
              this[Continuation_scheduler][SchedulerLike_schedule](
                this,
                yieldError,
              );
            } else {
              pipe(this, Disposable_dispose(err));
            }
          }
        },
      },
    ),
  ))();

export default Continuation_create;
