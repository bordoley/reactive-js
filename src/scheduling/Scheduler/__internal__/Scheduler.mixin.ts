import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __ContinuationLike_continuationScheduler as ContinuationLike_continuationScheduler,
  __ContinuationLike_priority as ContinuationLike_priority,
  __ContinuationLike_run as ContinuationLike_run,
  __ContinuationSchedulerLike_schedule as ContinuationSchedulerLike_schedule,
  __PrioritySchedulerImplementationLike_runContinuation as PrioritySchedulerImplementationLike_runContinuation,
  __PrioritySchedulerImplementationLike_shouldYield as PrioritySchedulerImplementationLike_shouldYield,
  __Continuation_childContinuation,
  __Continuation_effect,
  __SchedulerMixin_currentContinuation,
  __SchedulerMixin_startTime,
  __SchedulerMixin_yieldRequested,
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
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../../scheduling.js";
import {
  CollectionLike,
  CollectionLike_count,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Queue_indexedQueueMixin from "../../../util/Queue/__internal__/Queue.indexedQueueMixin.js";

export {
  ContinuationLike_priority,
  ContinuationLike_run,
  ContinuationSchedulerLike_schedule,
  PrioritySchedulerImplementationLike_runContinuation,
  PrioritySchedulerImplementationLike_shouldYield,
};

export interface ContinuationSchedulerLike {
  [ContinuationSchedulerLike_schedule](
    continuation: ContinuationLike,
    delay: number,
  ): void;
}

export interface ContinuationLike
  extends DisposableLike,
    QueueableLike<ContinuationLike>,
    CollectionLike {
  readonly [ContinuationLike_priority]: number;

  [ContinuationLike_run](): void;
}

export interface PrioritySchedulerImplementationLike
  extends PrioritySchedulerLike,
    ContinuationSchedulerLike,
    DisposableLike {
  readonly [PrioritySchedulerImplementationLike_shouldYield]: boolean;

  [PrioritySchedulerImplementationLike_runContinuation](
    continuation: ContinuationLike,
  ): void;

  [SchedulerLike_schedule](
    continuation: SideEffect1<SchedulerLike>,
    options?: {
      /**
       * The amount of time in ms to delay execution of the continuation.
       */
      readonly delay?: number;

      /**
       * The priority to execute the continuation with. The default behavior
       * is implementation specific.
       */
      readonly priority?: number;
    },
  ): DisposableLike;
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

export const PriorityScheduler_mixin: Mixin1<PrioritySchedulerMixin, number> =
  /*@__PURE__*/ (() => {
    type TContinuationProperties = {
      [ContinuationLike_continuationScheduler]: SchedulerLike &
        ContinuationSchedulerLike;
      [ContinuationLike_priority]: number;
      [__Continuation_childContinuation]: Optional<ContinuationLike>;
      [__Continuation_effect]: SideEffect1<SchedulerLike>;
    };

    const indexedQueueProtoype = getPrototype(
      Queue_indexedQueueMixin<ContinuationLike>(),
    );

    const createContinuation = createInstanceFactory(
      mix(
        include(Disposable_mixin, Queue_indexedQueueMixin<ContinuationLike>()),
        function Continuation(
          instance: Pick<ContinuationLike, typeof ContinuationLike_run> &
            Mutable<TContinuationProperties>,
          scheduler: SchedulerLike & ContinuationSchedulerLike,
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

          instance[ContinuationLike_continuationScheduler] = scheduler;
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
          [ContinuationLike_continuationScheduler]: none,
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

            const scheduler = this[ContinuationLike_continuationScheduler];

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
              const scheduler = this[ContinuationLike_continuationScheduler];
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

    type TSchedulerProperties = {
      [__SchedulerMixin_yieldRequested]: boolean;
      [__SchedulerMixin_currentContinuation]: Optional<ContinuationLike>;
      [SchedulerLike_maxYieldInterval]: number;
      [__SchedulerMixin_startTime]: number;
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
          | typeof SchedulerLike_yield
          | typeof PrioritySchedulerImplementationLike_runContinuation
        > &
          Mutable<TSchedulerProperties>,
        maxYieldInterval: number,
      ): PrioritySchedulerMixin {
        init(Disposable_mixin, instance);

        instance[SchedulerLike_maxYieldInterval] =
          clampPositiveInteger(maxYieldInterval);

        return instance;
      },
      props<TSchedulerProperties>({
        [__SchedulerMixin_currentContinuation]: none,
        [__SchedulerMixin_yieldRequested]: false,
        [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
        [__SchedulerMixin_startTime]: 0,
      }),
      {
        get [SchedulerLike_inContinuation](): boolean {
          unsafeCast<
            PrioritySchedulerImplementationLike & TSchedulerProperties
          >(this);
          const currentContinuation =
            this[__SchedulerMixin_currentContinuation];
          return isSome(currentContinuation);
        },

        get [SchedulerLike_shouldYield](): boolean {
          unsafeCast<
            TSchedulerProperties & PrioritySchedulerImplementationLike
          >(this);
          const currentContinuation =
            this[__SchedulerMixin_currentContinuation];
          const inContinuation = isSome(currentContinuation);

          const currentContinuationHasNestedRequests =
            (currentContinuation?.[CollectionLike_count] ?? 0) > 0;
          const isDisposed = this[DisposableLike_isDisposed];
          const yieldRequested = this[__SchedulerMixin_yieldRequested];

          const exceededMaxYieldInterval =
            this[SchedulerLike_now] >
            this[__SchedulerMixin_startTime] +
              this[SchedulerLike_maxYieldInterval];

          return (
            inContinuation &&
            (isDisposed ||
              yieldRequested ||
              exceededMaxYieldInterval ||
              currentContinuationHasNestedRequests ||
              this[PrioritySchedulerImplementationLike_shouldYield])
          );
        },

        [SchedulerLike_requestYield](this: TSchedulerProperties): void {
          this[__SchedulerMixin_yieldRequested] = true;
        },
        [SchedulerLike_schedule](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          effect: SideEffect1<SchedulerLike>,
          options?: { readonly delay?: number; priority?: number },
        ): DisposableLike {
          const delay = clampPositiveInteger(options?.delay ?? 0);
          const { priority = 0 } = options ?? {};
          const continuation = pipe(
            createContinuation(this, effect, priority),
            Disposable_addToIgnoringChildErrors(this),
          );

          const currentContinuation =
            this[__SchedulerMixin_currentContinuation];

          if (
            delay > 0 ||
            isNone(currentContinuation) ||
            currentContinuation[ContinuationLike_priority] !== priority
          ) {
            this[ContinuationSchedulerLike_schedule](continuation, delay);
          } else {
            currentContinuation[QueueableLike_enqueue](continuation);
          }

          return continuation;
        },

        [SchedulerLike_yield](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          delay = 0,
        ) {
          const shouldYield = delay > 0 || this[SchedulerLike_shouldYield];

          if (shouldYield) {
            throw newInstance(YieldError, delay);
          }
        },

        [PrioritySchedulerImplementationLike_runContinuation](
          this: PrioritySchedulerImplementationLike & TSchedulerProperties,
          continuation: ContinuationLike,
        ): void {
          this[__SchedulerMixin_startTime] = this[SchedulerLike_now];
          this[__SchedulerMixin_currentContinuation] = continuation;
          this[__SchedulerMixin_yieldRequested] = false;
          continuation[ContinuationLike_run]();
          this[__SchedulerMixin_yieldRequested] = false;
          this[__SchedulerMixin_currentContinuation] = none;
        },
      },
    );
  })();
