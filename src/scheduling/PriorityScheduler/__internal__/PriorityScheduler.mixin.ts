import { floor, max } from "../../../__internal__/math.js";
import {
  Mixin,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../__internal__/util.internal.js";
import {
  Optional,
  SideEffect1,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  unsafeCast,
} from "../../../functions.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_now,
  ContinuationContextLike_yield,
  PrioritySchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_count,
  QueueLike_push,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";

export const ContinuationSchedulerLike_now = Symbol(
  "ContinuationSchedulerLike_now",
);

export const ContinuationSchedulerLike_schedule = Symbol(
  "ContinuationSchedulerLike_schedule",
);

export const ContinuationSchedulerLike_shouldYield = Symbol(
  "ContinuationSchedulerLike_shouldYield",
);

export interface ContinuationSchedulerLike {
  readonly [ContinuationSchedulerLike_shouldYield]: boolean;
  readonly [ContinuationSchedulerLike_now]: number;

  [ContinuationSchedulerLike_schedule](
    continuation: ContinuationLike,
    delay: number,
  ): void;
}

export const ContinuationLike_run = Symbol("ContinuationLike_run");
export const ContinuationLike_priority = Symbol("ContinuationLike_run");
export const ContinuationLike_continuationScheduler = Symbol(
  "ContinuationLike_continuationScheduler",
);

export interface ContinuationLike
  extends DisposableLike,
    QueueLike<ContinuationLike>,
    ContinuationSchedulerLike {
  [ContinuationLike_continuationScheduler]: ContinuationSchedulerLike;
  readonly [ContinuationLike_priority]: number;

  [ContinuationLike_run](): void;
}

export const PrioritySchedulerImplementationLike_runContinuation = Symbol(
  "PrioritySchedulerImplementationLike_runContinuation",
);

export const PrioritySchedulerImplementationLike_shouldYield = Symbol(
  "PrioritySchedulerImplementationLike_shouldYield",
);

export interface PrioritySchedulerImplementationLike
  extends PrioritySchedulerLike,
    ContinuationSchedulerLike {
  readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;

  [PrioritySchedulerImplementationLike_runContinuation](
    continuation: ContinuationLike,
  ): void;
}

class YieldError {
  constructor(readonly delay: number) {}
}

type PrioritySchedulerMixin = Omit<
  PrioritySchedulerImplementationLike,
  | typeof SchedulerLike_now
  | typeof ContinuationSchedulerLike_schedule
  | typeof PrioritySchedulerImplementationLike_shouldYield
>;

export const PriorityScheduler_mixin: Mixin<PrioritySchedulerMixin> =
  /*@__PURE__*/ (() => {
    const Continuation_childContinuation = Symbol(
      "Continuation_childContinuation",
    );
    const Continuation_effect = Symbol("Continuation_effect");

    type TContinuationProperties = {
      [ContinuationLike_continuationScheduler]: ContinuationSchedulerLike;
      [ContinuationLike_priority]: number;
      [Continuation_childContinuation]: Optional<ContinuationLike>;
      [Continuation_effect]: SideEffect1<ContinuationContextLike>;
    };

    const createContinuation = createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
          IndexedQueue_fifoQueueMixin<ContinuationLike>(),
        ),
        function Continuation(
          instance: Pick<
            ContinuationLike & ContinuationContextLike,
            | typeof ContinuationLike_run
            | typeof ContinuationSchedulerLike_now
            | typeof ContinuationSchedulerLike_schedule
            | typeof ContinuationSchedulerLike_shouldYield
            | typeof ContinuationContextLike_now
            | typeof ContinuationContextLike_yield
          > &
            Mutable<TContinuationProperties>,
          scheduler: ContinuationSchedulerLike,
          effect: SideEffect1<ContinuationContextLike>,
          priority: number,
        ): ContinuationLike & ContinuationContextLike {
          init(Disposable_mixin, instance);
          init(IndexedQueue_fifoQueueMixin<ContinuationLike>(), instance);

          instance[ContinuationLike_continuationScheduler] = scheduler;
          instance[Continuation_effect] = effect;
          instance[ContinuationLike_priority] = priority;

          return instance;
        },
        props<TContinuationProperties>({
          [ContinuationLike_continuationScheduler]: none,
          [ContinuationLike_priority]: 0,
          [Continuation_childContinuation]: none,
          [Continuation_effect]: none,
        }),
        {
          get [ContinuationContextLike_now](): number {
            unsafeCast<ContinuationLike>(this);
            return this[ContinuationSchedulerLike_now];
          },
          get [ContinuationSchedulerLike_now](): number {
            unsafeCast<TContinuationProperties>(this);
            return this[ContinuationLike_continuationScheduler][
              ContinuationSchedulerLike_now
            ];
          },
          get [ContinuationSchedulerLike_shouldYield](): boolean {
            unsafeCast<TContinuationProperties>(this);
            return this[ContinuationLike_continuationScheduler][
              ContinuationSchedulerLike_shouldYield
            ];
          },
          [ContinuationContextLike_yield](this: ContinuationLike, delay = 0) {
            const shouldYield =
              delay > 0 ||
              this[QueueLike_count] > 0 ||
              this[ContinuationSchedulerLike_shouldYield];

            if (shouldYield) {
              throw newInstance(YieldError, delay);
            }
          },
          [ContinuationLike_run](
            this: ContinuationLike &
              PullableQueueLike<ContinuationLike> &
              TContinuationProperties &
              ContinuationContextLike,
          ): void {
            if (this[DisposableLike_isDisposed]) {
              return;
            }

            const scheduler = this[ContinuationLike_continuationScheduler];

            // Run any inner continuations first.
            let head: Optional<ContinuationLike> = none;
            while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
              if (!head[DisposableLike_isDisposed]) {
                this[Continuation_childContinuation] = head;
                head[ContinuationLike_run]();
                this[Continuation_childContinuation] = none;
              }

              const shouldYield =
                scheduler[ContinuationSchedulerLike_shouldYield];

              if (shouldYield && !this[DisposableLike_isDisposed]) {
                scheduler[ContinuationSchedulerLike_schedule](this, 0);
                return;
              }
            }

            let err: Optional<Error> = none;
            let yieldError: Optional<YieldError> = none;

            try {
              this[Continuation_effect](this);
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
            } else {
              this[DisposableLike_dispose](err);
            }

            // If the current continuation is being rescheduled with delay,
            // reschedule all its children on the parent.
            if (
              (isSome(yieldError) && yieldError.delay > 0) ||
              this[DisposableLike_isDisposed]
            ) {
              while (((head = this[PullableQueueLike_pull]()), isSome(head))) {
                if (!head[DisposableLike_isDisposed]) {
                  scheduler[ContinuationSchedulerLike_schedule](head, 0);
                }
              }
            }
          },
          [ContinuationSchedulerLike_schedule](
            this: ContinuationLike & TContinuationProperties,
            continuation: ContinuationLike,
            delay: number,
          ): void {
            const childContinuation = this[Continuation_childContinuation];
            continuation[ContinuationLike_continuationScheduler] = this;

            if (continuation[DisposableLike_isDisposed]) {
              return;
            }

            if (delay > 0 || this[DisposableLike_isDisposed]) {
              this[ContinuationLike_continuationScheduler][
                ContinuationSchedulerLike_schedule
              ](continuation, delay);
            } else if (
              isSome(childContinuation) &&
              childContinuation !== continuation &&
              !childContinuation[DisposableLike_isDisposed]
            ) {
              childContinuation[ContinuationSchedulerLike_schedule](
                continuation,
                0,
              );
            } else {
              this[QueueLike_push](continuation);
            }
          },
        },
      ),
    );

    const SchedulerMixin_yieldRequested = Symbol(
      "SchedulerMixin_yieldRequested",
    );
    const SchedulerMixin_currentContinuation = Symbol(
      "SchedulerMixin_currentContinuation",
    );

    type TSchedulerProperties = {
      [SchedulerMixin_yieldRequested]: boolean;
      [SchedulerMixin_currentContinuation]: Optional<ContinuationLike>;
    };

    return mix(
      include(Disposable_mixin),
      function SchedulerMixin(
        instance: Pick<
          PrioritySchedulerImplementationLike,
          | typeof SchedulerLike_inContinuation
          | typeof SchedulerLike_requestYield
          | typeof SchedulerLike_schedule
          | typeof SchedulerLike_shouldYield
          | typeof PrioritySchedulerImplementationLike_runContinuation
          | typeof ContinuationSchedulerLike_now
          | typeof ContinuationSchedulerLike_shouldYield
        > &
          Mutable<TSchedulerProperties>,
      ): PrioritySchedulerMixin {
        init(Disposable_mixin, instance);

        return instance;
      },
      props<TSchedulerProperties>({
        [SchedulerMixin_currentContinuation]: none,
        [SchedulerMixin_yieldRequested]: false,
      }),
      {
        get [SchedulerLike_inContinuation](): boolean {
          unsafeCast<
            PrioritySchedulerImplementationLike & TSchedulerProperties
          >(this);
          const currentContinuation = this[SchedulerMixin_currentContinuation];
          return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<
            TSchedulerProperties & PrioritySchedulerImplementationLike
          >(this);
          const inContinuation = this[SchedulerLike_inContinuation];
          const yieldRequested = this[SchedulerMixin_yieldRequested];

          return (
            inContinuation &&
            (yieldRequested ||
              this[PrioritySchedulerImplementationLike_shouldYield])
          );
        },
        get [ContinuationSchedulerLike_now](): number {
          unsafeCast<PrioritySchedulerLike>(this);
          return this[SchedulerLike_now];
        },
        get [ContinuationSchedulerLike_shouldYield](): boolean {
          unsafeCast<PrioritySchedulerLike>(this);
          return this[SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield](this: TSchedulerProperties): void {
          this[SchedulerMixin_yieldRequested] = true;
        },
        [SchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          effect: SideEffect1<ContinuationContextLike>,
          options?: { readonly delay?: number; priority?: number },
        ): DisposableLike {
          const delay = floor(max(options?.delay ?? 0, 0));
          const { priority = 0 } = options ?? {};
          const continuation = createContinuation(this, effect, priority);

          const currentContinuation = this[SchedulerMixin_currentContinuation];

          if (
            delay > 0 ||
            isNone(currentContinuation) ||
            currentContinuation[ContinuationLike_priority] !== priority
          ) {
            this[ContinuationSchedulerLike_schedule](continuation, delay);
          } else {
            currentContinuation[ContinuationSchedulerLike_schedule](
              continuation,
              0,
            );
          }

          return continuation;
        },
        [PrioritySchedulerImplementationLike_runContinuation](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          continuation: ContinuationLike,
        ): void {
          if (continuation[DisposableLike_isDisposed]) {
            return;
          }

          this[SchedulerMixin_currentContinuation] = continuation;
          this[SchedulerMixin_yieldRequested] = false;
          continuation[ContinuationLike_run]();
          this[SchedulerMixin_yieldRequested] = false;
          this[SchedulerMixin_currentContinuation] = none;
        },
      },
    );
  })();
