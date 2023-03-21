import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import { SchedulerLike, SchedulerLike_now } from "../../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import {
  ContinuationLike,
  ContinuationLike_continuationScheduler,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
  PriorityScheduler_mixin,
} from "./Scheduler.mixin.js";

const Scheduler_createAnimationFrameScheduler = /*@__PURE__*/ (() => {
  type TProperties = {
    [SchedulerLike_now]: number;
  };

  const scheduleImmediate = (
    scheduler: PrioritySchedulerImplementationLike & TProperties,
    continuation: ContinuationLike,
  ) => {
    requestAnimationFrame(time => {
      scheduler[SchedulerLike_now] = time;
      scheduler[PrioritySchedulerImplementationLike_runContinuation](
        continuation,
      );
    });
  };

  const runContinuation = (
    scheduler: PrioritySchedulerImplementationLike & TProperties,
    continuation: ContinuationLike,
    immmediateOrTimerDisposable: DisposableLike,
  ) => {
    // clear the immediateOrTimer disposable
    immmediateOrTimerDisposable[DisposableLike_dispose]();
    scheduleImmediate(scheduler, continuation);
  };

  const scheduleDelayed = (
    scheduler: PrioritySchedulerImplementationLike & TProperties,
    continuation: ContinuationLike,
    delay: number,
  ) => {
    const disposable = pipe(
      Disposable_create(),
      Disposable_addTo(continuation),
      Disposable_onDisposed(_ => clearTimeout(timeout)),
    );
    const timeout: ReturnType<typeof setTimeout> = setTimeout(
      runContinuation,
      delay,
      scheduler,
      continuation,
      disposable,
    );
  };

  return createInstanceFactory(
    mix(
      include(PriorityScheduler_mixin),
      function AnimationFrameScheduler(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_now
          | typeof PrioritySchedulerImplementationLike_shouldYield
          | typeof ContinuationSchedulerLike_schedule
        >,
      ): SchedulerLike {
        init(PriorityScheduler_mixin, instance, 5);

        return instance;
      },
      props<TProperties>({
        [SchedulerLike_now]: 0,
      }),
      {
        [PrioritySchedulerImplementationLike_shouldYield]: true,

        [ContinuationSchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike,
          continuation: ContinuationLike,
          delay: number,
        ) {
          pipe(this, Disposable_addIgnoringChildErrors(continuation));

          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          continuation[ContinuationLike_continuationScheduler] = this;

          if (delay > 0) {
            scheduleDelayed(this, continuation, delay);
          } else {
            scheduleImmediate(this, continuation);
          }
        },
      },
    ),
  );
})();

export default Scheduler_createAnimationFrameScheduler;
