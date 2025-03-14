import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mixin,
  Mutable,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  Optional,
  SideEffect1,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  raiseIf,
} from "../../functions.js";
import { abs, clampPositiveInteger, floor } from "../../math.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_push,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DisposableMixin from "./DisposableMixin.js";
import QueueMixin from "./QueueMixin.js";

export const SchedulerContinuationLike_run = Symbol(
  "SchedulerContinuationLike_run",
);
export const SchedulerContinuationLike_dueTime = Symbol(
  "SchedulerContinuationLike_dueTime",
);
export const SchedulerContinuationLike_id = Symbol(
  "SchedulerContinuationLike_id",
);

export interface SchedulerContinuationLike extends DisposableLike {
  readonly [SchedulerContinuationLike_dueTime]: number;
  readonly [SchedulerContinuationLike_id]: number;

  [SchedulerContinuationLike_run](): void;
}

export const SchedulerContinuation = {
  compare: (a: SchedulerContinuationLike, b: SchedulerContinuationLike) => {
    const diff =
      a[SchedulerContinuationLike_dueTime] -
      b[SchedulerContinuationLike_dueTime];
    return floor(abs(diff)) !== 0
      ? diff
      : a[SchedulerContinuationLike_id] - b[SchedulerContinuationLike_id];
  },
};

export const SchedulerMixinHostLike_shouldYield = Symbol(
  "SchedulerMixinHostLike_shouldYield",
);
export const SchedulerMixinHostLike_schedule = Symbol(
  "SchedulerMixinHostLike_schedule",
);

export interface SchedulerMixinHostLike
  extends Pick<
    SchedulerLike,
    typeof SchedulerLike_now | typeof SchedulerLike_maxYieldInterval
  > {
  readonly [SchedulerMixinHostLike_shouldYield]: boolean;

  [SchedulerMixinHostLike_schedule](
    continuation: SchedulerContinuationLike,
  ): void;
}

const SchedulerMixin: Mixin<
  SchedulerLike & DisposableLike,
  SchedulerMixinHostLike
> = /*@__PURE__*/ (() => {
  const QueueableSchedulerContinuationLike_parent = Symbol(
    "QueueableSchedulerContinuationLike_parent",
  );

  const QueueableSchedulerContinuationLike_isReschedulingChildren = Symbol(
    "QueueableSchedulerContinuationLike_isReschedulingChildren",
  );

  interface QueueableSchedulerContinuationLike
    extends SchedulerContinuationLike,
      QueueLike<QueueableSchedulerContinuationLike> {
    [QueueableSchedulerContinuationLike_parent]: Optional<QueueableSchedulerContinuationLike>;
    readonly [QueueableSchedulerContinuationLike_isReschedulingChildren]: boolean;
  }

  const SchedulerMixinLike_schedule = Symbol("SchedulerMixinLike_schedule");

  const SchedulerMixinLike_taskIDCounter = Symbol(
    "SchedulerMixinLike_taskIDCounter",
  );

  const SchedulerMixinLike_currentContinuation = Symbol(
    "SchedulerMixinLike_currentContinuation",
  );

  const SchedulerMixinLike_startTime = Symbol("SchedulerMixinLike_startTime");

  const SchedulerMixinLike_yieldRequested = Symbol(
    "SchedulerMixinLike_yieldRequested",
  );

  interface SchedulerMixinLike extends SchedulerLike {
    [SchedulerMixinLike_taskIDCounter]: number;

    [SchedulerMixinLike_startTime]: number;

    [SchedulerMixinLike_yieldRequested]: boolean;

    [SchedulerMixinLike_currentContinuation]: Optional<QueueableSchedulerContinuationLike>;

    [SchedulerMixinLike_schedule](
      continuation: QueueableSchedulerContinuationLike,
    ): void;
  }

  const createQueueableContinuation: (
    scheduler: SchedulerMixinLike,
    effect: SideEffect1<ContinuationContextLike>,
    dueTime: number,
  ) => QueueableSchedulerContinuationLike = (() => {
    class ContinuationYieldError {
      constructor(readonly delay: number) {}
    }

    const QueueableContinuation_effect = Symbol("QueueableContinuation_effect");

    const QueueableContinuation_scheduler = Symbol(
      "QueueableContinuation_scheduler",
    );

    type TProperties = {
      [QueueableSchedulerContinuationLike_parent]: Optional<QueueableSchedulerContinuationLike>;
      [QueueableSchedulerContinuationLike_isReschedulingChildren]: boolean;
      [QueueableContinuation_scheduler]: SchedulerMixinLike;
      [QueueableContinuation_effect]: SideEffect1<ContinuationContextLike>;
      [SchedulerContinuationLike_dueTime]: number;
      [SchedulerContinuationLike_id]: number;
    };

    const findNearestNonDisposedParent = (
      continuation: QueueableSchedulerContinuationLike & TProperties,
    ) => {
      let parent = continuation[QueueableSchedulerContinuationLike_parent];
      while (isSome(parent) && parent[DisposableLike_isDisposed]) {
        parent = parent[QueueableSchedulerContinuationLike_parent];
      }
      return parent;
    };

    const rescheduleContinuation = (
      continuation: QueueableSchedulerContinuationLike & TProperties,
    ) => {
      const scheduler = continuation[QueueableContinuation_scheduler];
      const parent = findNearestNonDisposedParent(continuation);

      if (isSome(parent)) {
        parent[SinkLike_push](continuation);
      } else {
        continuation[SchedulerContinuationLike_dueTime] =
          scheduler[SchedulerLike_now];
        scheduler[SchedulerMixinLike_schedule](continuation);
      }
    };

    const rescheduleChildrenOnParentOrScheduler = (
      continuation: QueueableSchedulerContinuationLike & TProperties,
    ) => {
      continuation[QueueableSchedulerContinuationLike_isReschedulingChildren] =
        true;
      const scheduler = continuation[QueueableContinuation_scheduler];
      const parent = findNearestNonDisposedParent(continuation);

      for (
        let head: Optional<QueueableSchedulerContinuationLike> = none;
        (head = continuation[QueueLike_dequeue]()), isSome(head);

      ) {
        if (head[DisposableLike_isDisposed]) {
          // continue
        } else if (isSome(parent)) {
          parent[SinkLike_push](head);
        } else {
          scheduler[SchedulerMixinLike_schedule](head);
        }
      }

      continuation[QueueableSchedulerContinuationLike_isReschedulingChildren] =
        false;
    };

    function onContinuationDisposed(
      this: TProperties & QueueableSchedulerContinuationLike,
    ) {
      rescheduleChildrenOnParentOrScheduler(this);

      // A continuation could be disposed and yet retained
      // by a scheduler in a queue so free all references
      // to avoid retaining memory.
      this[QueueableSchedulerContinuationLike_parent] = none;
      this[QueueableContinuation_scheduler] =
        none as unknown as SchedulerMixinLike;
      this[QueueableContinuation_effect] =
        none as unknown as SideEffect1<ContinuationContextLike>;
    }

    return mixInstanceFactory(
      include(
        DisposableMixin,
        QueueMixin<QueueableSchedulerContinuationLike>(),
      ),
      function QueueableContinuation(
        this: Pick<
          QueueableSchedulerContinuationLike,
          typeof SchedulerContinuationLike_run
        > &
          ContinuationContextLike &
          Mutable<TProperties>,
        scheduler: SchedulerMixinLike,
        effect: SideEffect1<ContinuationContextLike>,
        dueTime: number,
      ): QueueableSchedulerContinuationLike & ContinuationContextLike {
        init(DisposableMixin, this);

        init(QueueMixin<QueueableSchedulerContinuationLike>(), this, none);

        this[SchedulerContinuationLike_dueTime] = dueTime;

        this[SchedulerContinuationLike_id] = ++scheduler[
          SchedulerMixinLike_taskIDCounter
        ];

        this[QueueableContinuation_scheduler] = scheduler;
        this[QueueableContinuation_effect] = effect;

        pipe(this, DisposableContainer.onDisposed(onContinuationDisposed));

        return this;
      },
      props<TProperties>({
        [QueueableSchedulerContinuationLike_parent]: none,
        [QueueableSchedulerContinuationLike_isReschedulingChildren]: false,
        [QueueableContinuation_scheduler]: none,
        [QueueableContinuation_effect]: none,
        [SchedulerContinuationLike_dueTime]: 0,
        [SchedulerContinuationLike_id]: 0,
      }),
      proto({
        [SchedulerContinuationLike_run](
          this: QueueableSchedulerContinuationLike &
            QueueLike<QueueableSchedulerContinuationLike> &
            ContinuationContextLike &
            TProperties &
            SchedulerLike,
        ): void {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          const scheduler = this[QueueableContinuation_scheduler];

          const oldCurrentContinuation =
            scheduler[SchedulerMixinLike_currentContinuation];

          scheduler[SchedulerMixinLike_currentContinuation] = this;

          // A QueueableSchedulerContinuationLike may run inner continuations that will
          // set the currentContinuation to themselves, but we don't want to
          // reset the startTime or yieldRequested flags in this case since these
          // should be honored for the duration of the time that the synchronous
          // parent continuation is active.
          if (isNone(oldCurrentContinuation)) {
            scheduler[SchedulerMixinLike_startTime] =
              scheduler[SchedulerLike_now];
            scheduler[SchedulerMixinLike_yieldRequested] = false;
          }

          // Flag whether the continuation has been rescheduled
          let rescheduled = false;

          // Run any inner continuations first.
          for (
            let head: Optional<QueueableSchedulerContinuationLike> = none;
            (head = this[QueueLike_dequeue]()), isSome(head);

          ) {
            head[QueueableSchedulerContinuationLike_parent] = this;
            head[SchedulerContinuationLike_run]();
            head[QueueableSchedulerContinuationLike_parent] = none;

            if (
              scheduler[SchedulerLike_shouldYield] &&
              !this[DisposableLike_isDisposed]
            ) {
              rescheduleContinuation(this);
              rescheduled = true;
              break;
            }
          }

          let err: Optional<Error> = none;
          let yieldError: Optional<ContinuationYieldError> = none;
          if (!rescheduled && !this[DisposableLike_isDisposed]) {
            try {
              this[QueueableContinuation_effect](this);
            } catch (e) {
              if (e instanceof ContinuationYieldError) {
                yieldError = e;
              } else {
                err = error(e);
              }
            }
          }

          // Reschedule the continuation if yielded
          if (isSome(yieldError)) {
            const { delay } = yieldError;

            if (delay > 0) {
              // Bump the taskID so that the yielded with delay continuation is run
              // at a lower relative priority to other previously scheduled continuations
              // with the same due time.
              this[SchedulerContinuationLike_id] = ++scheduler[
                SchedulerMixinLike_taskIDCounter
              ];

              this[SchedulerContinuationLike_dueTime] =
                scheduler[SchedulerLike_now] + delay;

              rescheduleChildrenOnParentOrScheduler(this);

              scheduler[SchedulerMixinLike_schedule](this);
            } else {
              rescheduleContinuation(this);
            }
            rescheduled = true;
          }

          if (!rescheduled) {
            this[DisposableLike_dispose](err);
          }

          scheduler[SchedulerMixinLike_currentContinuation] =
            oldCurrentContinuation;
        },

        [ContinuationContextLike_yield](
          this: QueueableSchedulerContinuationLike & TProperties,
          delay = 0,
        ): void {
          const scheduler = this[QueueableContinuation_scheduler];

          if (__DEV__) {
            const currentContinuation =
              scheduler[SchedulerMixinLike_currentContinuation];

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
      }),
    );
  })();

  type TProperties = {
    [SchedulerMixinLike_currentContinuation]: Optional<QueueableSchedulerContinuationLike>;
    [SchedulerMixinLike_yieldRequested]: boolean;
    [SchedulerMixinLike_startTime]: number;
    [SchedulerMixinLike_taskIDCounter]: number;
  };

  return mix<
    SchedulerLike & DisposableLike,
    TProperties,
    Omit<
      SchedulerMixinLike,
      | keyof DisposableLike
      | typeof SchedulerLike_now
      | typeof SchedulerLike_maxYieldInterval
      | typeof SchedulerMixinLike_currentContinuation
      | typeof SchedulerMixinLike_yieldRequested
      | typeof SchedulerMixinLike_startTime
      | typeof SchedulerMixinLike_taskIDCounter
    >,
    SchedulerMixinHostLike & SchedulerLike & DisposableLike
  >(
    include(DisposableMixin),
    function SchedulerMixin(
      this: SchedulerMixinLike,
    ): SchedulerLike & DisposableLike {
      init(DisposableMixin, this);

      return this;
    },
    props<TProperties>({
      [SchedulerMixinLike_currentContinuation]: none,
      [SchedulerMixinLike_yieldRequested]: false,
      [SchedulerMixinLike_startTime]: 0,
      [SchedulerMixinLike_taskIDCounter]: 0,
    }),
    {
      get [SchedulerLike_inContinuation](): boolean {
        unsafeCast<SchedulerMixinHostLike & SchedulerMixinLike>(this);
        const currentContinuation =
          this[SchedulerMixinLike_currentContinuation];
        return isSome(currentContinuation);
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<
          SchedulerMixinLike & SchedulerMixinHostLike & DisposableLike
        >(this);

        if (__DEV__) {
          const inContinuation = this[SchedulerLike_inContinuation];

          raiseIf(
            !inContinuation,
            "shouldYield may only be called from within a scheduler continuation",
          );
        }

        const isDisposed = this[DisposableLike_isDisposed];
        const yieldRequested = this[SchedulerMixinLike_yieldRequested];
        const exceededMaxYieldInterval =
          this[SchedulerLike_now] >
          this[SchedulerMixinLike_startTime] +
            this[SchedulerLike_maxYieldInterval];
        const currentContinuationHasScheduledChildren =
          (
            this[
              SchedulerMixinLike_currentContinuation
            ] as QueueableSchedulerContinuationLike
          )[QueueLike_count] > 0;

        return (
          isDisposed ||
          yieldRequested ||
          exceededMaxYieldInterval ||
          currentContinuationHasScheduledChildren ||
          this[SchedulerMixinHostLike_shouldYield]
        );
      },

      [SchedulerLike_requestYield](this: SchedulerMixinLike): void {
        this[SchedulerMixinLike_yieldRequested] = true;
      },

      [SchedulerMixinLike_schedule](
        this: SchedulerMixinHostLike & SchedulerMixinLike,
        continuation: QueueableSchedulerContinuationLike,
      ): void {
        const activeContinuation = this[SchedulerMixinLike_currentContinuation];

        const now = this[SchedulerLike_now];
        const dueTime = continuation[SchedulerContinuationLike_dueTime];

        if (
          dueTime > now ||
          isNone(activeContinuation) ||
          activeContinuation[DisposableLike_isDisposed] ||
          // Occurs when the continuation is rescheduling itself
          // and there is no non-disposed parent to enqueue itself onto.
          activeContinuation === continuation ||
          // Occurs when an active continuation is rescheduling its
          // children because it has been rescheduled in the future.
          activeContinuation[
            QueueableSchedulerContinuationLike_isReschedulingChildren
          ]
        ) {
          this[SchedulerMixinHostLike_schedule](continuation);
        } else {
          activeContinuation[SinkLike_push](continuation);
        }
      },

      [SchedulerLike_schedule](
        this: SchedulerMixinLike & DisposableLike,
        effect: SideEffect1<ContinuationContextLike>,
        options?: { readonly delay?: number },
      ): DisposableLike {
        if (this[DisposableLike_isDisposed]) {
          return Disposable.disposed;
        }

        const dueTime =
          this[SchedulerLike_now] + clampPositiveInteger(options?.delay ?? 0);

        const continuation = pipe(
          createQueueableContinuation(this, effect, dueTime),
          Disposable.addToContainer(this),
        );

        this[SchedulerMixinLike_schedule](continuation);
        return continuation;
      },
    },
  );
})();

export default SchedulerMixin;
