import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  Mutable,
  createInstanceFactory,
  getPrototype,
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
  __Continuation_childContinuation,
  __Continuation_effect,
  __Continuation_scheduler,
} from "../../../__internal__/symbols.js";
import {
  QueueCollectionLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.js";
import {
  Optional,
  SideEffect1,
  call,
  error,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  SchedulerLike,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Queue_indexedQueueMixin from "../../../util/Queue/__internal__/Queue.indexedQueueMixin.js";
import YieldError from "./Continuation.yieldError.js";

const Continuation_create = /*@__PURE__*/ (() => {
  type TContinuationProperties = {
    [__Continuation_scheduler]: SchedulerLike & ContinuationSchedulerLike;
    [ContinuationLike_priority]: number;
    [__Continuation_childContinuation]: Optional<ContinuationLike>;
    [__Continuation_effect]: SideEffect1<SchedulerLike>;
  };

  const indexedQueueProtoype = getPrototype(
    Queue_indexedQueueMixin<ContinuationLike>(),
  );

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, Queue_indexedQueueMixin<ContinuationLike>()),
      function Continuation(
        instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
          Mutable<TContinuationProperties>,
        scheduler: ContinuationSchedulerLike,
        effect: SideEffect1<SchedulerLike>,
        priority: number,
      ): ContinuationLike {
        init(Disposable_mixin, instance);

        init(
          Queue_indexedQueueMixin<ContinuationLike>(),
          instance,
          MAX_SAFE_INTEGER,
          "overflow",
        );

        instance[__Continuation_scheduler] = scheduler;
        instance[__Continuation_effect] = effect;
        instance[ContinuationLike_priority] = priority;

        pipe(
          instance,
          Disposable_onDisposed(_ => {
            let head: Optional<ContinuationLike> = none;
            while (((head = instance[QueueLike_dequeue]()), isSome(head))) {
              if (!head[DisposableLike_isDisposed]) {
                scheduler[ContinuationSchedulerLike_schedule](head, 0);
              }
            }
          }),
        );

        return instance;
      },
      props<TContinuationProperties>({
        [__Continuation_scheduler]: none,
        [ContinuationLike_priority]: 0,
        [__Continuation_childContinuation]: none,
        [__Continuation_effect]: none,
      }),
      {
        [ContinuationLike_run](
          this: ContinuationLike &
            QueueCollectionLike<ContinuationLike> &
            TContinuationProperties &
            SchedulerLike,
        ): void {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          const scheduler = this[__Continuation_scheduler];

          // Run any inner continuations first.
          let head: Optional<ContinuationLike> = none;
          while (((head = this[QueueLike_dequeue]()), isSome(head))) {
            this[__Continuation_childContinuation] = head;
            head[ContinuationLike_run]();
            this[__Continuation_childContinuation] = none;

            const shouldYield = scheduler[SchedulerLike_shouldYield];

            if (this[DisposableLike_isDisposed]) {
              return;
            } else if (shouldYield) {
              scheduler[ContinuationSchedulerLike_schedule](this, 0);
              return;
            }
          }

          let err: Optional<Error> = none;
          let yieldError: Optional<YieldError> = none;

          try {
            this[__Continuation_effect](scheduler);
          } catch (e) {
            if (e instanceof YieldError) {
              yieldError = e;
            } else {
              err = error(e);
            }
          }

          if (isSome(yieldError) && !this[DisposableLike_isDisposed]) {
            scheduler[ContinuationSchedulerLike_schedule](
              this,
              yieldError.delay,
            );

            if (yieldError.delay > 0) {
              let head: Optional<ContinuationLike> = none;
              // If the current continuation is being rescheduled with delay,
              // reschedule all its children on the parent.
              while (((head = this[QueueLike_dequeue]()), isSome(head))) {
                if (!head[DisposableLike_isDisposed]) {
                  scheduler[ContinuationSchedulerLike_schedule](head, 0);
                }
              }
            }
          } else {
            this[DisposableLike_dispose](err);
          }
        },
        [QueueableLike_enqueue](
          this: ContinuationLike & TContinuationProperties,
          continuation: ContinuationLike,
        ): boolean {
          const childContinuation = this[__Continuation_childContinuation];

          if (continuation[DisposableLike_isDisposed]) {
            return false;
          } else if (this[DisposableLike_isDisposed]) {
            const scheduler = this[__Continuation_scheduler];
            scheduler[ContinuationSchedulerLike_schedule](continuation, 0);
            /*
          return raiseWithDebugMessage(
            "attempting to enqueue onto a disposed continuation",
          );*/
            return false;
          } else if (
            isSome(childContinuation) &&
            childContinuation !== continuation &&
            !childContinuation[DisposableLike_isDisposed]
          ) {
            return childContinuation[QueueableLike_enqueue](continuation);
          } else {
            return call(
              indexedQueueProtoype[QueueableLike_enqueue],
              this,
              continuation,
            );
          }
        },
      },
    ),
  );
})();

export default Continuation_create;
