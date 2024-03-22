import { __DEV__ } from "../../../../__internal__/constants.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../../__internal__/mixins.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike,
  SchedulerLike_now,
  SchedulerLike_shouldYield,
} from "../../../../concurrent.js";
import {
  Optional,
  SideEffect1,
  error,
  isSome,
  newInstance,
  none,
  pipe,
  raiseIf,
} from "../../../../functions.js";
import * as DisposableContainer from "../../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../../../../utils/__mixins__/IndexedQueueMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../../../utils.js";
import {
  ContinuationLike,
  ContinuationLike_dueTime,
  ContinuationLike_id,
  ContinuationLike_run,
} from "../../../__internal__/Continuation.js";

export const QueueableContinuationLike_parent = Symbol(
  "QueueableContinuationLike_parent",
);

export interface QueueableContinuationLike
  extends ContinuationLike,
    QueueLike<QueueableContinuationLike> {
  [QueueableContinuationLike_parent]: Optional<QueueableContinuationLike>;
}

export const QueueableContinuationSchedulerLike_schedule = Symbol(
  "QueueableContinuationSchedulerLike_schedule",
);

export const QueueableContinuationSchedulerLike_nextTaskID = Symbol(
  "QueueableContinuationSchedulerLike_nextTaskID",
);

export const QueueableContinuationSchedulerLike_currentContinuation = Symbol(
  "QueueableContinuationSchedulerLike_currentContinuation",
);

export interface QueueableContinuationSchedulerLike
  extends Pick<
    SchedulerLike,
    typeof SchedulerLike_now | typeof SchedulerLike_shouldYield
  > {
  readonly [QueueableContinuationSchedulerLike_nextTaskID]: number;

  [QueueableContinuationSchedulerLike_currentContinuation]: Optional<QueueableContinuationLike>;

  [QueueableContinuationSchedulerLike_schedule](
    continuation: QueueableContinuationLike,
  ): void;
}

export const create: (
  scheduler: QueueableContinuationSchedulerLike,
  effect: SideEffect1<ContinuationContextLike>,
  dueTime: number,
) => QueueableContinuationLike = /*@__PURE__*/ (() => {
  class ContinuationYieldError {
    constructor(readonly delay: number) {}
  }

  const QueueableContinuation_effect = Symbol("QueueableContinuation_effect");

  const QueueableContinuation_scheduler = Symbol(
    "QueueableContinuation_scheduler",
  );

  type TProperties = {
    [QueueableContinuationLike_parent]: Optional<QueueableContinuationLike>;
    [QueueableContinuation_scheduler]: QueueableContinuationSchedulerLike;
    [QueueableContinuation_effect]: SideEffect1<ContinuationContextLike>;
    [ContinuationLike_dueTime]: number;
    [ContinuationLike_id]: number;
  };

  const findNearestNonDisposedParent = (
    continuation: QueueableContinuationLike & TProperties,
  ) => {
    let parent = continuation[QueueableContinuationLike_parent];
    while (isSome(parent) && parent[DisposableLike_isDisposed]) {
      parent = parent[QueueableContinuationLike_parent];
    }
    return parent;
  };

  const rescheduleContinuation = (
    continuation: QueueableContinuationLike & TProperties,
  ) => {
    const scheduler = continuation[QueueableContinuation_scheduler];
    const parent = findNearestNonDisposedParent(continuation);

    if (isSome(parent)) {
      parent[QueueableLike_enqueue](continuation);
    } else {
      scheduler[QueueableContinuationSchedulerLike_schedule](continuation);
    }
  };

  const rescheduleChildrenOnParentOrScheduler = (
    continuation: QueueableContinuationLike & TProperties,
  ) => {
    const scheduler = continuation[QueueableContinuation_scheduler];
    const parent = findNearestNonDisposedParent(continuation);

    let head: Optional<QueueableContinuationLike> = none;
    while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
      if (head[DisposableLike_isDisposed]) {
        // continue
      } else if (isSome(parent)) {
        parent[QueueableLike_enqueue](head);
      } else {
        scheduler[QueueableContinuationSchedulerLike_schedule](head);
      }
    }
  };

  const runContinuation = (
    thiz: QueueableContinuationLike &
      QueueLike<QueueableContinuationLike> &
      ContinuationContextLike &
      TProperties &
      SchedulerLike,
  ) => {
    const scheduler = thiz[QueueableContinuation_scheduler];

    // Run any inner continuations first.
    let head: Optional<QueueableContinuationLike> = none;
    while (((head = thiz[QueueLike_dequeue]()), isSome(head))) {
      head[QueueableContinuationLike_parent] = thiz;
      head[ContinuationLike_run]();
      head[QueueableContinuationLike_parent] = none;

      if (
        scheduler[SchedulerLike_shouldYield] &&
        !thiz[DisposableLike_isDisposed]
      ) {
        rescheduleContinuation(thiz);
        return;
      }
    }

    if (thiz[DisposableLike_isDisposed]) {
      return;
    }

    let err: Optional<Error> = none;
    let yieldError: Optional<ContinuationYieldError> = none;

    try {
      thiz[QueueableContinuation_effect](thiz);
    } catch (e) {
      if (e instanceof ContinuationYieldError) {
        yieldError = e;
      } else {
        err = error(e);
      }
    }

    if (isSome(yieldError) && !thiz[DisposableLike_isDisposed]) {
      const { delay } = yieldError;

      if (delay > 0) {
        // Bump the taskID so that the yielded with delay continuation is run
        // at a lower relative priority to other previously scheduled continuations
        // with the same due time.
        thiz[ContinuationLike_id] =
          scheduler[QueueableContinuationSchedulerLike_nextTaskID];

        thiz[ContinuationLike_dueTime] = scheduler[SchedulerLike_now] + delay;

        rescheduleChildrenOnParentOrScheduler(thiz);

        scheduler[QueueableContinuationSchedulerLike_schedule](thiz);
      } else {
        rescheduleContinuation(thiz);
      }
    } else {
      thiz[DisposableLike_dispose](err);
    }
  };

  return mixInstanceFactory(
    include(DisposableMixin, IndexedQueueMixin<QueueableContinuationLike>()),
    function QueueableContinuation(
      instance: Pick<QueueableContinuationLike, typeof ContinuationLike_run> &
        ContinuationContextLike &
        Mutable<TProperties>,
      scheduler: QueueableContinuationSchedulerLike,
      effect: SideEffect1<ContinuationContextLike>,
      dueTime: number,
    ): QueueableContinuationLike & ContinuationContextLike {
      init(DisposableMixin, instance);

      init(IndexedQueueMixin<QueueableContinuationLike>(), instance, none);

      instance[ContinuationLike_dueTime] = dueTime;

      instance[ContinuationLike_id] =
        scheduler[QueueableContinuationSchedulerLike_nextTaskID];

      instance[QueueableContinuation_scheduler] = scheduler;
      instance[QueueableContinuation_effect] = effect;

      pipe(
        instance,
        DisposableContainer.onDisposed(_ => {
          rescheduleChildrenOnParentOrScheduler(instance);

          // A continuation could be disposed and yet retained
          // by a scheduler in a queue so free all references
          // to avoid retaining memory.
          instance[QueueableContinuationLike_parent] = none;
          instance[QueueableContinuation_scheduler] =
            none as unknown as QueueableContinuationSchedulerLike;
          instance[QueueableContinuation_effect] =
            none as unknown as SideEffect1<ContinuationContextLike>;
        }),
      );

      return instance;
    },
    props<TProperties>({
      [QueueableContinuationLike_parent]: none,
      [QueueableContinuation_scheduler]: none,
      [QueueableContinuation_effect]: none,
      [ContinuationLike_dueTime]: 0,
      [ContinuationLike_id]: 0,
    }),
    {
      [ContinuationLike_run](
        this: QueueableContinuationLike &
          QueueLike<QueueableContinuationLike> &
          ContinuationContextLike &
          TProperties &
          SchedulerLike,
      ): void {
        if (this[DisposableLike_isDisposed]) {
          return;
        }

        const scheduler = this[QueueableContinuation_scheduler];

        const oldCurrentContinuation =
          scheduler[QueueableContinuationSchedulerLike_currentContinuation];

        scheduler[QueueableContinuationSchedulerLike_currentContinuation] =
          this;

        runContinuation(this);

        scheduler[QueueableContinuationSchedulerLike_currentContinuation] =
          oldCurrentContinuation;
      },

      [ContinuationContextLike_yield](
        this: QueueableContinuationLike & TProperties,
        delay = 0,
      ): void {
        const scheduler = this[QueueableContinuation_scheduler];

        if (__DEV__) {
          const currentContinuation =
            scheduler[QueueableContinuationSchedulerLike_currentContinuation];

          raiseIf(
            currentContinuation !== this,
            "Attempted to invoke yield outside of a continuation's run context",
          );
        }

        const shouldYield = delay > 0 || scheduler[SchedulerLike_shouldYield];

        if (shouldYield) {
          throw newInstance(ContinuationYieldError, delay);
        }
      },
    },
  );
})();
