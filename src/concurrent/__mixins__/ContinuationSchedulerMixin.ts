import { MAX_SAFE_INTEGER, __DEV__ } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  getPrototype,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { CollectionLike_count } from "../../collections.js";
import {
  ContinuationLike,
  ContinuationLike_activeChild,
  ContinuationLike_parent,
  ContinuationLike_run,
  ContinuationLike_scheduler,
  ContinuationLike_yield,
  ContinuationSchedulerLike,
  ContinuationSchedulerLike_schedule,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../concurrent.js";
import {
  Function2,
  Optional,
  SideEffect1,
  call,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  pipeLazy,
  raiseIf,
} from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueCollectionLike,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";

export const ContinuationSchedulerImplementationLike_shouldYield = Symbol(
  "ContinuationSchedulerImplementationLike_shouldYield",
);
export const ContinuationSchedulerImplementationLike_scheduleContinuation =
  Symbol(
    "ContinContinuationSchedulerImplementationLike_scheduleContinuationuationSchedulerDelegateLike_shouldYield",
  );

export interface ContinuationSchedulerImplementationLike {
  readonly [ContinuationSchedulerImplementationLike_shouldYield]: boolean;

  readonly [SchedulerLike_now]: number;

  [ContinuationSchedulerImplementationLike_scheduleContinuation](
    continuation: ContinuationLike,
    delay: number,
  ): void;
}

export const ContinuationSchedulerMixinLike_runContinuation = Symbol(
  "ContinuationSchedulerMixinLike_runContinuation",
);
export interface ContinuationSchedulerMixinLike
  extends ContinuationSchedulerImplementationLike,
    ContinuationSchedulerLike,
    DisposableLike {
  [ContinuationSchedulerMixinLike_runContinuation](
    continuation: ContinuationLike,
  ): void;
}

const ContinuationSchedulerMixin: Mixin1<
  ContinuationSchedulerMixinLike,
  number,
  ContinuationSchedulerImplementationLike
> = /*@__PURE__*/ (() => {
  class ContinuationYieldError {
    constructor(readonly delay: number) {}
  }

  const createContinuation = (() => {
    const Continuation_effect = Symbol("Continuation_effect");

    type TContinuationProperties = {
      [ContinuationLike_activeChild]: Optional<ContinuationLike>;
      [ContinuationLike_parent]: Optional<ContinuationLike>;
      [ContinuationLike_scheduler]: SchedulerLike & ContinuationSchedulerLike;
      [Continuation_effect]: SideEffect1<SchedulerLike>;
    };

    const indexedQueueProtoype = getPrototype(
      IndexedQueueMixin<ContinuationLike>(),
    );

    const findNearestNonDisposedParent = (continuation: ContinuationLike) => {
      let parent = continuation[ContinuationLike_parent];
      while (isSome(parent) && parent[DisposableLike_isDisposed]) {
        parent = parent[ContinuationLike_parent];
      }
      return parent;
    };

    const rescheduleContinuation = (continuation: ContinuationLike) => {
      const scheduler = continuation[ContinuationLike_scheduler];
      const parent = findNearestNonDisposedParent(continuation);

      if (isSome(parent)) {
        parent[QueueableLike_enqueue](continuation);
      } else {
        scheduler[ContinuationSchedulerLike_schedule](continuation);
      }
    };

    const rescheduleChildrenOnParentOrScheduler = (
      continuation: ContinuationLike & QueueCollectionLike<ContinuationLike>,
    ) => {
      const scheduler = continuation[ContinuationLike_scheduler];
      const parent = findNearestNonDisposedParent(continuation);

      if (isSome(parent)) {
        let head: Optional<ContinuationLike> = none;
        while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
          if (!head[DisposableLike_isDisposed]) {
            parent[QueueableLike_enqueue](head);
          }
        }
      } else {
        let head: Optional<ContinuationLike> = none;
        while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
          if (!head[DisposableLike_isDisposed]) {
            scheduler[ContinuationSchedulerLike_schedule](head);
          }
        }
      }
    };

    return createInstanceFactory(
      mix(
        include(DisposableMixin, IndexedQueueMixin<ContinuationLike>()),
        function Continuation(
          instance: Pick<
            ContinuationLike,
            typeof ContinuationLike_run | typeof ContinuationLike_yield
          > &
            Mutable<TContinuationProperties>,
          scheduler: ContinuationSchedulerLike,
          effect: SideEffect1<SchedulerLike>,
        ): ContinuationLike {
          init(DisposableMixin, instance);

          init(
            IndexedQueueMixin<ContinuationLike>(),
            instance,
            MAX_SAFE_INTEGER,
            "overflow",
          );

          instance[ContinuationLike_scheduler] = scheduler;
          instance[Continuation_effect] = effect;

          pipe(
            instance,
            Disposable.onDisposed(
              pipeLazy(instance, rescheduleChildrenOnParentOrScheduler),
            ),
          );

          return instance;
        },
        props<TContinuationProperties>({
          [ContinuationLike_activeChild]: none,
          [ContinuationLike_parent]: none,
          [ContinuationLike_scheduler]: none,
          [Continuation_effect]: none,
        }),
        {
          [ContinuationLike_run](
            this: ContinuationLike &
              QueueCollectionLike<ContinuationLike> &
              TContinuationProperties &
              SchedulerLike,
          ): void {
            const scheduler = this[ContinuationLike_scheduler];

            if (this[DisposableLike_isDisposed]) {
              rescheduleChildrenOnParentOrScheduler(this);
              return;
            }

            // Run any inner continuations first.
            let head: Optional<ContinuationLike> = none;
            while (((head = this[QueueLike_dequeue]()), isSome(head))) {
              this[ContinuationLike_activeChild] = head;
              head[ContinuationLike_run]();
              this[ContinuationLike_activeChild] = none;

              if (this[DisposableLike_isDisposed]) {
                rescheduleChildrenOnParentOrScheduler(this);
                return;
              } else if (scheduler[SchedulerLike_shouldYield]) {
                rescheduleContinuation(this);
                return;
              }
            }

            let err: Optional<Error> = none;
            let yieldError: Optional<ContinuationYieldError> = none;

            this[ContinuationLike_activeChild] = this;
            try {
              this[Continuation_effect](scheduler);
            } catch (e) {
              if (e instanceof ContinuationYieldError) {
                yieldError = e;
              } else {
                err = error(e);
              }
            }
            this[ContinuationLike_activeChild] = none;

            if (isSome(yieldError) && !this[DisposableLike_isDisposed]) {
              if (yieldError.delay > 0) {
                rescheduleChildrenOnParentOrScheduler(this);
                scheduler[ContinuationSchedulerLike_schedule](this, yieldError);
              } else {
                rescheduleContinuation(this);
              }
            } else {
              this[DisposableLike_dispose](err);
              rescheduleChildrenOnParentOrScheduler(this);
            }
          },

          [ContinuationLike_yield](delay?: number) {
            throw newInstance(ContinuationYieldError, delay ?? 0);
          },

          [QueueableLike_enqueue](
            this: ContinuationLike & TContinuationProperties,
            continuation: ContinuationLike,
          ): boolean {
            continuation[ContinuationLike_parent] = this;

            return call(
              indexedQueueProtoype[QueueableLike_enqueue],
              this,
              continuation,
            );
          },
        },
      ),
    );
  })();

  const ContinuationSchedulerMixin_currentContinuation = Symbol(
    "ContinuationSchedulerMixin_currentContinuation",
  );
  const ContinuationSchedulerMixin_yieldRequested = Symbol(
    "ContinuationSchedulerMixin_yieldRequested",
  );
  const ContinuationSchedulerMixin_startTime = Symbol(
    "ContinuationSchedulerMixin_startTime",
  );

  type TSchedulerProperties = {
    [SchedulerLike_maxYieldInterval]: number;
    [ContinuationSchedulerMixin_currentContinuation]: Optional<ContinuationLike>;
    [ContinuationSchedulerMixin_yieldRequested]: boolean;
    [ContinuationSchedulerMixin_startTime]: number;
  };

  const getActiveContinuation = (instance: TSchedulerProperties) => {
    let parent = instance[ContinuationSchedulerMixin_currentContinuation];
    let activeChild = parent?.[ContinuationLike_activeChild];

    while (isSome(activeChild) && activeChild !== parent) {
      parent = activeChild;
      activeChild = parent[ContinuationLike_activeChild];
    }
    return parent;
  };

  return mix<
    Function2<
      Omit<
        ContinuationSchedulerMixinLike,
        keyof DisposableLike | typeof SchedulerLike_maxYieldInterval
      > &
        Mutable<TSchedulerProperties>,
      number,
      ContinuationSchedulerMixinLike & ContinuationSchedulerImplementationLike
    >,
    ReturnType<typeof props<TSchedulerProperties>>,
    Omit<
      ContinuationSchedulerMixinLike,
      | keyof DisposableLike
      | typeof SchedulerLike_maxYieldInterval
      | keyof ContinuationSchedulerImplementationLike
    >,
    ContinuationSchedulerImplementationLike
  >(
    include(DisposableMixin),
    function ContinuationSchedulerMixin(
      instance: Omit<
        ContinuationSchedulerMixinLike,
        keyof DisposableLike | typeof SchedulerLike_maxYieldInterval
      > &
        TSchedulerProperties,
      maxYieldInterval: number,
    ): ContinuationSchedulerMixinLike &
      ContinuationSchedulerImplementationLike {
      init(DisposableMixin, instance);

      instance[SchedulerLike_maxYieldInterval] =
        clampPositiveInteger(maxYieldInterval);

      return instance;
    },
    props<TSchedulerProperties>({
      [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
      [ContinuationSchedulerMixin_currentContinuation]: none,
      [ContinuationSchedulerMixin_yieldRequested]: false,
      [ContinuationSchedulerMixin_startTime]: 0,
    }),
    {
      get [SchedulerLike_inContinuation](): boolean {
        unsafeCast<ContinuationSchedulerMixinLike & TSchedulerProperties>(this);
        const currentContinuation =
          this[ContinuationSchedulerMixin_currentContinuation];
        return isSome(currentContinuation);
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<TSchedulerProperties & ContinuationSchedulerMixinLike>(this);
        const inContinuation = this[SchedulerLike_inContinuation];
        const isDisposed = this[DisposableLike_isDisposed];
        const yieldRequested = this[ContinuationSchedulerMixin_yieldRequested];

        return (
          inContinuation &&
          (isDisposed ||
            yieldRequested ||
            //exceededMaxYieldInterval
            this[SchedulerLike_now] >
              this[ContinuationSchedulerMixin_startTime] +
                this[SchedulerLike_maxYieldInterval] ||
            (getActiveContinuation(this)?.[CollectionLike_count] ?? 0) > 0 ||
            this[ContinuationSchedulerImplementationLike_shouldYield])
        );
      },

      [SchedulerLike_requestYield](this: TSchedulerProperties): void {
        this[ContinuationSchedulerMixin_yieldRequested] = true;
      },

      [ContinuationSchedulerLike_schedule](
        this: ContinuationSchedulerMixinLike & TSchedulerProperties,
        continuation: ContinuationLike,
        options?: { readonly delay?: number },
      ): void {
        if (__DEV__) {
          raiseIf(
            continuation[ContinuationLike_scheduler] !== this,
            "Attempted to schedule a continuation created on a different scheduler",
          );
        }

        const delay = clampPositiveInteger(options?.delay ?? 0);

        if (continuation[DisposableLike_isDisposed]) {
          return;
        }

        const activeContinuation = getActiveContinuation(this);

        if (
          delay > 0 ||
          isNone(activeContinuation) ||
          activeContinuation[DisposableLike_isDisposed] ||
          // Occurs when the continuation is rescheduling itself
          // and there is no non-disposed parent to enqueue itself onto.
          activeContinuation === continuation ||
          // Occurs when an active continuation is rescheduling its
          // children because it will be disposed.
          continuation[ContinuationLike_parent] === activeContinuation
        ) {
          continuation[ContinuationLike_parent] = none;
          this[ContinuationSchedulerImplementationLike_scheduleContinuation](
            continuation,
            delay,
          );
        } else {
          activeContinuation[QueueableLike_enqueue](continuation);
        }
      },

      [SchedulerLike_schedule](
        this: ContinuationSchedulerMixinLike & TSchedulerProperties,
        effect: SideEffect1<SchedulerLike>,
        options?: { readonly delay?: number },
      ): DisposableLike {
        const continuation = pipe(
          createContinuation(this, effect),
          Disposable.addTo(this, { ignoreChildErrors: true }),
        );
        this[ContinuationSchedulerLike_schedule](continuation, options);
        return continuation;
      },

      [SchedulerLike_yield](
        this: ContinuationSchedulerMixinLike & TSchedulerProperties,
        delay = 0,
      ) {
        const shouldYield = delay > 0 || this[SchedulerLike_shouldYield];

        const currentContinuation =
          this[ContinuationSchedulerMixin_currentContinuation];

        if (shouldYield && isSome(currentContinuation)) {
          currentContinuation[ContinuationLike_yield](delay);
        }
      },

      [ContinuationSchedulerMixinLike_runContinuation](
        this: ContinuationSchedulerMixinLike & TSchedulerProperties,
        continuation: ContinuationLike,
      ): void {
        this[ContinuationSchedulerMixin_startTime] = this[SchedulerLike_now];
        this[ContinuationSchedulerMixin_currentContinuation] = continuation;
        this[ContinuationSchedulerMixin_yieldRequested] = false;
        continuation[ContinuationLike_run]();
        this[ContinuationSchedulerMixin_yieldRequested] = false;
        this[ContinuationSchedulerMixin_currentContinuation] = none;
      },
    },
  );
})();

export default ContinuationSchedulerMixin;
