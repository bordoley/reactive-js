import * as CurrentTime from "../../__internal__/CurrentTime.js";
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
  DisposableContainerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  FlowControllerEnumeratorLike_isDataAvailable,
  FlowControllerQueueLike,
  FlowControllerQueueLike_enqueue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DisposableMixin from "./DisposableMixin.js";
import FlowControlledQueueMixin from "./FlowControlledQueueMixin.js";

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

export interface SchedulerMixinHostLike {
  readonly [SchedulerMixinHostLike_shouldYield]: boolean;

  [SchedulerMixinHostLike_schedule](
    continuation: SchedulerContinuationLike,
  ): void;
}

type TReturn = SchedulerLike & DisposableLike;
type TPrototype = Omit<
  SchedulerLike & DisposableLike,
  | keyof SchedulerMixinHostLike
  | typeof DisposableLike_error
  | typeof DisposableLike_isDisposed
>;

const SchedulerMixin: Mixin<TReturn, TPrototype, SchedulerMixinHostLike> =
  /*@__PURE__*/ (() => {
    const QueueSchedulerContinuationLike_parent = Symbol(
      "QueueSchedulerContinuationLike_parent",
    );

    const QueueSchedulerContinuationLike_isReschedulingChildren = Symbol(
      "QueueSchedulerContinuationLike_isReschedulingChildren",
    );

    interface QueueSchedulerContinuationLike
      extends SchedulerContinuationLike,
        FlowControllerQueueLike<QueueSchedulerContinuationLike> {
      [QueueSchedulerContinuationLike_parent]: Optional<QueueSchedulerContinuationLike>;
      readonly [QueueSchedulerContinuationLike_isReschedulingChildren]: boolean;
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

      [SchedulerMixinLike_currentContinuation]: Optional<QueueSchedulerContinuationLike>;

      [SchedulerMixinLike_schedule](
        continuation: QueueSchedulerContinuationLike,
      ): void;
    }

    const createQueueContinuation: (
      scheduler: SchedulerMixinLike,
      effect: SideEffect1<ContinuationContextLike>,
      dueTime: number,
    ) => QueueSchedulerContinuationLike = (() => {
      class ContinuationYieldError {
        constructor(readonly delay: number) {}
      }

      const QueueContinuation_effect = Symbol("QueueContinuation_effect");

      const QueueContinuation_scheduler = Symbol("QueueContinuation_scheduler");

      type TProperties = {
        [QueueSchedulerContinuationLike_parent]: Optional<QueueSchedulerContinuationLike>;
        [QueueSchedulerContinuationLike_isReschedulingChildren]: boolean;
        [QueueContinuation_scheduler]: SchedulerMixinLike;
        [QueueContinuation_effect]: SideEffect1<ContinuationContextLike>;
        [SchedulerContinuationLike_dueTime]: number;
        [SchedulerContinuationLike_id]: number;
      };

      const findNearestNonDisposedParent = (
        continuation: QueueSchedulerContinuationLike & TProperties,
      ) => {
        let parent = continuation[QueueSchedulerContinuationLike_parent];
        while (isSome(parent) && parent[DisposableLike_isDisposed]) {
          parent = parent[QueueSchedulerContinuationLike_parent];
        }
        return parent;
      };

      const rescheduleContinuation = (
        continuation: QueueSchedulerContinuationLike & TProperties,
      ) => {
        const scheduler = continuation[QueueContinuation_scheduler];
        const parent = findNearestNonDisposedParent(continuation);

        if (isSome(parent)) {
          parent[FlowControllerQueueLike_enqueue](continuation);
        } else {
          continuation[SchedulerContinuationLike_dueTime] =
            scheduler[SchedulerLike_now];
          scheduler[SchedulerMixinLike_schedule](continuation);
        }
      };

      const rescheduleChildrenOnParentOrScheduler = (
        continuation: QueueSchedulerContinuationLike & TProperties,
      ) => {
        continuation[QueueSchedulerContinuationLike_isReschedulingChildren] =
          true;
        const scheduler = continuation[QueueContinuation_scheduler];
        const parent = findNearestNonDisposedParent(continuation);

        while (continuation[EnumeratorLike_moveNext]()) {
          const head = continuation[EnumeratorLike_current];
          if (head[DisposableLike_isDisposed]) {
            // continue
          } else if (isSome(parent)) {
            parent[FlowControllerQueueLike_enqueue](head);
          } else {
            scheduler[SchedulerMixinLike_schedule](head);
          }
        }

        continuation[QueueSchedulerContinuationLike_isReschedulingChildren] =
          false;
      };

      function onContinuationDisposed(
        this: TProperties & QueueSchedulerContinuationLike,
      ) {
        rescheduleChildrenOnParentOrScheduler(this);

        // A continuation could be disposed and yet retained
        // by a scheduler in a queue so free all references
        // to avoid retaining memory.
        this[QueueSchedulerContinuationLike_parent] = none;
        this[QueueContinuation_scheduler] =
          none as unknown as SchedulerMixinLike;
        this[QueueContinuation_effect] =
          none as unknown as SideEffect1<ContinuationContextLike>;
      }

      return mixInstanceFactory(
        include(
          DisposableMixin,
          FlowControlledQueueMixin<QueueSchedulerContinuationLike>(),
        ),
        function QueueContinuation(
          this: Pick<
            QueueSchedulerContinuationLike,
            typeof SchedulerContinuationLike_run
          > &
            ContinuationContextLike &
            Mutable<TProperties>,
          scheduler: SchedulerMixinLike,
          effect: SideEffect1<ContinuationContextLike>,
          dueTime: number,
        ): QueueSchedulerContinuationLike & ContinuationContextLike {
          init(DisposableMixin, this);

          init(
            FlowControlledQueueMixin<QueueSchedulerContinuationLike>(),
            this,
            none,
          );

          this[SchedulerContinuationLike_dueTime] = dueTime;

          this[SchedulerContinuationLike_id] = ++scheduler[
            SchedulerMixinLike_taskIDCounter
          ];

          this[QueueContinuation_scheduler] = scheduler;
          this[QueueContinuation_effect] = effect;

          pipe(this, DisposableContainer.onDisposed(onContinuationDisposed));

          return this;
        },
        props<TProperties>({
          [QueueSchedulerContinuationLike_parent]: none,
          [QueueSchedulerContinuationLike_isReschedulingChildren]: false,
          [QueueContinuation_scheduler]: none,
          [QueueContinuation_effect]: none,
          [SchedulerContinuationLike_dueTime]: 0,
          [SchedulerContinuationLike_id]: 0,
        }),
        proto({
          [SchedulerContinuationLike_run](
            this: QueueSchedulerContinuationLike &
              FlowControllerQueueLike<QueueSchedulerContinuationLike> &
              ContinuationContextLike &
              TProperties &
              SchedulerLike,
          ): void {
            if (this[DisposableLike_isDisposed]) {
              return;
            }

            const scheduler = this[QueueContinuation_scheduler];

            const oldCurrentContinuation =
              scheduler[SchedulerMixinLike_currentContinuation];

            scheduler[SchedulerMixinLike_currentContinuation] = this;

            // A QueueSchedulerContinuationLike may run inner continuations that will
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
            while (this[EnumeratorLike_moveNext]()) {
              const head = this[EnumeratorLike_current];
              head[QueueSchedulerContinuationLike_parent] = this;
              head[SchedulerContinuationLike_run]();
              head[QueueSchedulerContinuationLike_parent] = none;

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
                this[QueueContinuation_effect](this);
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
            this: QueueSchedulerContinuationLike & TProperties,
            delay = 0,
          ): void {
            const scheduler = this[QueueContinuation_scheduler];

            if (__DEV__) {
              const currentContinuation =
                scheduler[SchedulerMixinLike_currentContinuation];

              raiseIf(
                currentContinuation !== this,
                "Attempted to invoke yield outside of a continuation's run context",
              );
            }

            const shouldYield =
              delay > 0 || scheduler[SchedulerLike_shouldYield];

            if (shouldYield) {
              throw newInstance(ContinuationYieldError, delay);
            }
          },
        }),
      );
    })();

    type TProperties = {
      [SchedulerMixinLike_currentContinuation]: Optional<QueueSchedulerContinuationLike>;
      [SchedulerMixinLike_yieldRequested]: boolean;
      [SchedulerMixinLike_startTime]: number;
      [SchedulerMixinLike_taskIDCounter]: number;
    };

    return mix(
      include(DisposableMixin),
      function SchedulerMixin(this): SchedulerLike & DisposableLike {
        init(DisposableMixin, this);
        return this;
      },
      props<TProperties>({
        [SchedulerMixinLike_currentContinuation]: none,
        [SchedulerMixinLike_yieldRequested]: false,
        [SchedulerMixinLike_startTime]: 0,
        [SchedulerMixinLike_taskIDCounter]: 0,
      }),
      proto<Omit<SchedulerLike, keyof DisposableContainerLike>>({
        [SchedulerLike_maxYieldInterval]: 5,

        get [SchedulerLike_now]() {
          return CurrentTime.now();
        },

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
          const currentContinuationHasScheduledChildren = (
            this[
              SchedulerMixinLike_currentContinuation
            ] as QueueSchedulerContinuationLike
          )[FlowControllerEnumeratorLike_isDataAvailable];

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
          continuation: QueueSchedulerContinuationLike,
        ): void {
          const activeContinuation =
            this[SchedulerMixinLike_currentContinuation];

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
              QueueSchedulerContinuationLike_isReschedulingChildren
            ]
          ) {
            this[SchedulerMixinHostLike_schedule](continuation);
          } else {
            activeContinuation[FlowControllerQueueLike_enqueue](continuation);
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
            createQueueContinuation(this, effect, dueTime),
            Disposable.addToContainer(this),
          );

          this[SchedulerMixinLike_schedule](continuation);
          return continuation;
        },
      }),
    );
  })();

export default SchedulerMixin;
