import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
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
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
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
} from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";

export const ContinuationLike_run = Symbol("ContinuationLike_run");
export const ContinuationLike_dueTime = Symbol("ContinuationLike_dueTime");
export const ContinuationLike_id = Symbol("ContinuationLike_id");

export interface ContinuationLike extends DisposableLike {
  readonly [ContinuationLike_dueTime]: number;
  readonly [ContinuationLike_id]: number;

  [ContinuationLike_run](): void;
}

export const ContinuationLike_comparator = (
  a: ContinuationLike,
  b: ContinuationLike,
) => {
  const diff = a[ContinuationLike_dueTime] - b[ContinuationLike_dueTime];
  return diff !== 0 ? diff : a[ContinuationLike_id] - b[ContinuationLike_id];
};

export const ContinuationSchedulerLike_shouldYield = Symbol(
  "ContinuationSchedulerLike_shouldYield",
);
export const ContinuationSchedulerLike_scheduleContinuation = Symbol(
  "ContinuationSchedulerLike_scheduleContinuation",
);

export interface ContinuationSchedulerLike
  extends Pick<SchedulerLike, typeof SchedulerLike_now> {
  readonly [ContinuationSchedulerLike_shouldYield]: boolean;

  [ContinuationSchedulerLike_scheduleContinuation](
    continuation: ContinuationLike,
  ): void;
}

const ContinuationSchedulerMixin: Mixin1<
  SchedulerLike & DisposableLike & ContinuationSchedulerLike,
  number,
  ContinuationSchedulerLike
> = /*@__PURE__*/ (() => {
  const ContinuationSchedulerMixinLike_currentContinuation = Symbol(
    "ContinuationSchedulerMixinLike_currentContinuation",
  );

  const ContinuationSchedulerMixinLike_schedule = Symbol(
    "ContinuationSchedulerMixinLike_schedule",
  );

  const ContinuationSchedulerMixinLike_nextTaskID = Symbol(
    "ContinuationSchedulerMixinLike_nextTaskID",
  );

  interface ContinuationSchedulerMixinLike
    extends ContinuationSchedulerLike,
      SchedulerLike,
      DisposableLike {
    readonly [SchedulerLike_maxYieldInterval]: number;
    readonly [ContinuationSchedulerMixinLike_nextTaskID]: number;

    [ContinuationSchedulerMixinLike_currentContinuation]: Optional<QueueableContinuationLike>;

    [ContinuationSchedulerMixinLike_schedule](
      continuation: QueueableContinuationLike,
      options?: { readonly delay?: number },
    ): void;
  }

  const QueueableContinuationLike_parent = Symbol(
    "QueueableContinuationLike_parent",
  );

  const QueueableContinuationLike_activeChild = Symbol(
    "QueueableContinuationLike_activeChild",
  );

  const QueueableContinuationLike_effect = Symbol(
    "QueueableContinuationLike_effect",
  );

  const QueueableContinuationLike_scheduler = Symbol(
    "QueueableContinuationLike_scheduler",
  );

  interface QueueableContinuationLike
    extends ContinuationLike,
      QueueLike<QueueableContinuationLike>,
      ContinuationContextLike {
    [QueueableContinuationLike_activeChild]: Optional<QueueableContinuationLike>;

    [QueueableContinuationLike_parent]: Optional<QueueableContinuationLike>;

    readonly [QueueableContinuationLike_scheduler]: ContinuationSchedulerMixinLike;
    readonly [QueueableContinuationLike_effect]: SideEffect1<ContinuationContextLike>;

    [ContinuationLike_dueTime]: number;
    [ContinuationLike_id]: number;
  }

  const createContinuation = (() => {
    class ContinuationYieldError {
      constructor(readonly delay: number) {}
    }

    type TContinuationProperties = {
      [QueueableContinuationLike_activeChild]: Optional<QueueableContinuationLike>;
      [QueueableContinuationLike_parent]: Optional<QueueableContinuationLike>;
      [QueueableContinuationLike_scheduler]: ContinuationSchedulerMixinLike;
      [QueueableContinuationLike_effect]: SideEffect1<ContinuationContextLike>;
      [ContinuationLike_dueTime]: number;
      [ContinuationLike_id]: number;
    };

    const indexedQueueProtoype = getPrototype(
      IndexedQueueMixin<QueueableContinuationLike>(),
    );

    const findNearestNonDisposedParent = (
      continuation: QueueableContinuationLike,
    ) => {
      let parent = continuation[QueueableContinuationLike_parent];
      while (isSome(parent) && parent[DisposableLike_isDisposed]) {
        parent = parent[QueueableContinuationLike_parent];
      }
      return parent;
    };

    const rescheduleContinuation = (
      continuation: QueueableContinuationLike,
    ) => {
      const scheduler = continuation[QueueableContinuationLike_scheduler];
      const parent = findNearestNonDisposedParent(continuation);

      if (isSome(parent)) {
        parent[QueueableLike_enqueue](continuation);
      } else {
        scheduler[ContinuationSchedulerMixinLike_schedule](continuation);
      }
    };

    const rescheduleChildrenOnParentOrScheduler = (
      continuation: QueueableContinuationLike,
    ) => {
      const scheduler = continuation[QueueableContinuationLike_scheduler];
      const parent = findNearestNonDisposedParent(continuation);

      if (isSome(parent)) {
        let head: Optional<QueueableContinuationLike> = none;
        while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
          if (!head[DisposableLike_isDisposed]) {
            parent[QueueableLike_enqueue](head);
          }
        }
      } else {
        let head: Optional<QueueableContinuationLike> = none;
        while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
          if (!head[DisposableLike_isDisposed]) {
            scheduler[ContinuationSchedulerMixinLike_schedule](head);
          }
        }
      }
    };

    const runContinuation = (thiz: QueueableContinuationLike) => {
      const scheduler = thiz[QueueableContinuationLike_scheduler];

      if (thiz[DisposableLike_isDisposed]) {
        rescheduleChildrenOnParentOrScheduler(thiz);
        return;
      }

      // Run any inner continuations first.
      let head: Optional<QueueableContinuationLike> = none;
      while (((head = thiz[QueueLike_dequeue]()), isSome(head))) {
        thiz[QueueableContinuationLike_activeChild] = head;

        runContinuation(head);

        thiz[QueueableContinuationLike_activeChild] = none;

        if (thiz[DisposableLike_isDisposed]) {
          rescheduleChildrenOnParentOrScheduler(thiz);
          return;
        } else if (scheduler[SchedulerLike_shouldYield]) {
          rescheduleContinuation(thiz);
          return;
        }
      }

      let err: Optional<Error> = none;
      let yieldError: Optional<ContinuationYieldError> = none;

      thiz[QueueableContinuationLike_activeChild] = thiz;
      try {
        thiz[QueueableContinuationLike_effect](thiz);
      } catch (e) {
        if (e instanceof ContinuationYieldError) {
          yieldError = e;
        } else {
          err = error(e);
        }
      }
      thiz[QueueableContinuationLike_activeChild] = none;

      if (isSome(yieldError) && !thiz[DisposableLike_isDisposed]) {
        if (yieldError.delay > 0) {
          rescheduleChildrenOnParentOrScheduler(thiz);

          // Bump the taskID so that the yielded with delay continuation is run
          // at a lower relative priority to other previously scheduled continuations
          // with the same due time.
          thiz[ContinuationLike_id] =
            scheduler[ContinuationSchedulerMixinLike_nextTaskID];
          scheduler[ContinuationSchedulerMixinLike_schedule](thiz, yieldError);
        } else {
          rescheduleContinuation(thiz);
        }
      } else {
        thiz[DisposableLike_dispose](err);
        rescheduleChildrenOnParentOrScheduler(thiz);
      }
    };

    return createInstanceFactory(
      mix(
        include(
          DisposableMixin,
          IndexedQueueMixin<QueueableContinuationLike>(),
        ),
        function Continuation(
          instance: Pick<
            QueueableContinuationLike,
            typeof ContinuationLike_run | typeof ContinuationContextLike_yield
          > &
            Mutable<TContinuationProperties>,
          scheduler: ContinuationSchedulerMixinLike,
          effect: SideEffect1<ContinuationContextLike>,
        ): QueueableContinuationLike {
          init(DisposableMixin, instance);

          init(IndexedQueueMixin<QueueableContinuationLike>(), instance, none);

          instance[ContinuationLike_id] =
            scheduler[ContinuationSchedulerMixinLike_nextTaskID];

          instance[QueueableContinuationLike_scheduler] = scheduler;
          instance[QueueableContinuationLike_effect] = effect;

          pipe(
            instance,
            Disposable.onDisposed(
              pipeLazy(instance, rescheduleChildrenOnParentOrScheduler),
            ),
          );

          return instance;
        },
        props<TContinuationProperties>({
          [QueueableContinuationLike_activeChild]: none,
          [QueueableContinuationLike_parent]: none,
          [QueueableContinuationLike_scheduler]: none,
          [QueueableContinuationLike_effect]: none,
          [ContinuationLike_dueTime]: 0,
          [ContinuationLike_id]: 0,
        }),
        {
          [ContinuationLike_run](
            this: QueueableContinuationLike &
              QueueLike<QueueableContinuationLike> &
              TContinuationProperties &
              SchedulerLike,
          ): void {
            const scheduler = this[QueueableContinuationLike_scheduler];

            scheduler[ContinuationSchedulerMixinLike_currentContinuation] =
              this;
            runContinuation(this);
            scheduler[ContinuationSchedulerMixinLike_currentContinuation] =
              none;
          },

          [QueueableLike_enqueue](
            this: QueueableContinuationLike & TContinuationProperties,
            continuation: QueueableContinuationLike,
          ): boolean {
            continuation[QueueableContinuationLike_parent] = this;

            return call(
              indexedQueueProtoype[QueueableLike_enqueue],
              this,
              continuation,
            );
          },

          [ContinuationContextLike_yield](
            this: QueueableContinuationLike & TContinuationProperties,
            delay = 0,
          ): void {
            const scheduler = this[QueueableContinuationLike_scheduler];

            const shouldYield =
              delay > 0 || scheduler[SchedulerLike_shouldYield];

            const currentContinuation =
              scheduler[ContinuationSchedulerMixinLike_currentContinuation];

            if (shouldYield && isSome(currentContinuation)) {
              throw newInstance(ContinuationYieldError, delay);
            }
          },
        },
      ),
    );
  })();

  const getActiveContinuation = (instance: TSchedulerProperties) => {
    let parent = instance[ContinuationSchedulerMixin_currentContinuation];
    let activeChild = parent?.[QueueableContinuationLike_activeChild];

    while (isSome(activeChild) && activeChild !== parent) {
      parent = activeChild;
      activeChild = parent[QueueableContinuationLike_activeChild];
    }
    return parent;
  };

  const ContinuationSchedulerMixin_currentContinuation = Symbol(
    "ContinuationSchedulerMixin_currentContinuation",
  );
  const ContinuationSchedulerMixin_startTime = Symbol(
    "ContinuationSchedulerMixin_startTime",
  );
  const ContinuationSchedulerMixin_taskIDCounter = Symbol(
    "ContinuationSchedulerMixin_taskIDCounter",
  );
  const ContinuationSchedulerMixin_yieldRequested = Symbol(
    "ContinuationSchedulerMixin_yieldRequested",
  );

  type TSchedulerProperties = {
    [SchedulerLike_maxYieldInterval]: number;
    [ContinuationSchedulerMixin_currentContinuation]: Optional<QueueableContinuationLike>;
    [ContinuationSchedulerMixin_yieldRequested]: boolean;
    [ContinuationSchedulerMixin_startTime]: number;
    [ContinuationSchedulerMixin_taskIDCounter]: number;
  };

  return mix<
    ContinuationSchedulerLike,
    Function2<
      Omit<
        ContinuationSchedulerMixinLike,
        keyof DisposableLike | typeof SchedulerLike_maxYieldInterval
      > &
        Mutable<TSchedulerProperties>,
      number,
      ContinuationSchedulerLike & SchedulerLike & DisposableLike
    >,
    TSchedulerProperties,
    Omit<
      ContinuationSchedulerMixinLike,
      | keyof DisposableLike
      | typeof SchedulerLike_maxYieldInterval
      | keyof ContinuationSchedulerLike
      | keyof TSchedulerProperties
    >,
    ContinuationSchedulerLike & SchedulerLike & DisposableLike
  >(
    include(DisposableMixin),
    function ContinuationSchedulerMixin(
      instance: Omit<
        ContinuationSchedulerMixinLike,
        keyof DisposableLike | typeof SchedulerLike_maxYieldInterval
      > &
        TSchedulerProperties,
      maxYieldInterval: number,
    ): ContinuationSchedulerLike & SchedulerLike & DisposableLike {
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
      [ContinuationSchedulerMixin_taskIDCounter]: 0,
    }),
    {
      get [ContinuationSchedulerMixinLike_currentContinuation](): Optional<QueueableContinuationLike> {
        unsafeCast<TSchedulerProperties>(this);
        return this[ContinuationSchedulerMixin_currentContinuation];
      },

      set [ContinuationSchedulerMixinLike_currentContinuation](
        continuation: Optional<QueueableContinuationLike>,
      ) {
        unsafeCast<TSchedulerProperties & SchedulerLike>(this);
        this[ContinuationSchedulerMixin_currentContinuation] = continuation;
        this[ContinuationSchedulerMixin_startTime] = this[SchedulerLike_now];
        this[ContinuationSchedulerMixin_yieldRequested] = false;
      },

      get [ContinuationSchedulerMixinLike_nextTaskID](): number {
        unsafeCast<TSchedulerProperties>(this);
        return this[ContinuationSchedulerMixin_taskIDCounter]++;
      },

      get [SchedulerLike_inContinuation](): boolean {
        unsafeCast<ContinuationSchedulerLike & TSchedulerProperties>(this);
        const currentContinuation =
          this[ContinuationSchedulerMixin_currentContinuation];
        return isSome(currentContinuation);
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<
          TSchedulerProperties & ContinuationSchedulerLike & DisposableLike
        >(this);
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
            (getActiveContinuation(this)?.[QueueLike_count] ?? 0) > 0 ||
            this[ContinuationSchedulerLike_shouldYield])
        );
      },

      [SchedulerLike_requestYield](this: TSchedulerProperties): void {
        this[ContinuationSchedulerMixin_yieldRequested] = true;
      },

      [ContinuationSchedulerMixinLike_schedule](
        this: ContinuationSchedulerMixinLike & TSchedulerProperties,
        continuation: QueueableContinuationLike,
        options?: { readonly delay?: number },
      ): void {
        const delay = clampPositiveInteger(options?.delay ?? 0);
        const now = this[SchedulerLike_now];
        const dueTime = now + delay;

        continuation[ContinuationLike_dueTime] = dueTime;

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
          continuation[QueueableContinuationLike_parent] === activeContinuation
        ) {
          continuation[QueueableContinuationLike_parent] = none;
          this[ContinuationSchedulerLike_scheduleContinuation](continuation);
        } else {
          activeContinuation[QueueableLike_enqueue](continuation);
        }
      },

      [SchedulerLike_schedule](
        this: ContinuationSchedulerMixinLike & TSchedulerProperties,
        effect: SideEffect1<ContinuationContextLike>,
        options?: { readonly delay?: number },
      ): DisposableLike {
        const continuation = pipe(
          createContinuation(this, effect),
          Disposable.addTo(this, { ignoreChildErrors: true }),
        );

        this[ContinuationSchedulerMixinLike_schedule](continuation, options);
        return continuation;
      },
    },
  );
})();

export default ContinuationSchedulerMixin;
