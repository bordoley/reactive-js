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
import { CollectionLike, CollectionLike_count } from "../../collections.js";
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
  QueueCollectionLike,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";

export const ContinuationLike_run = Symbol("ContinuationLike_run");

export interface ContinuationLike extends DisposableLike {
  [ContinuationLike_run](): void;
}

export const ContinuationSchedulerImplementationLike_shouldYield = Symbol(
  "ContinuationSchedulerImplementationLike_shouldYield",
);
export const ContinuationSchedulerImplementationLike_scheduleContinuation =
  Symbol("ContinuationSchedulerImplementationLike_scheduleContinuation");

export interface ContinuationSchedulerImplementationLike {
  readonly [ContinuationSchedulerImplementationLike_shouldYield]: boolean;

  readonly [SchedulerLike_now]: number;

  [ContinuationSchedulerImplementationLike_scheduleContinuation](
    continuation: ContinuationLike,
    delay: number,
  ): void;
}

export interface ContinuationSchedulerLike
  extends SchedulerLike,
    ContinuationSchedulerImplementationLike,
    DisposableLike {}

const ContinuationSchedulerMixin: Mixin1<
  ContinuationSchedulerLike,
  number,
  ContinuationSchedulerImplementationLike
> = /*@__PURE__*/ (() => {
  const ContinuationSchedulerMixinLike_currentContinuation = Symbol(
    "ContinuationSchedulerMixinLike_currentContinuation",
  );
  const ContinuationSchedulerMixinLike_yieldRequested = Symbol(
    "ContinuationSchedulerMixinLike_yieldRequested",
  );
  const ContinuationSchedulerMixinLike_startTime = Symbol(
    "ContinuationSchedulerMixinLike_startTime",
  );

  const ContinuationSchedulerMixinLike_schedule = Symbol(
    "ContinuationSchedulerMixinLike_schedule",
  );

  interface ContinuationSchedulerMixinLike extends ContinuationSchedulerLike {
    [SchedulerLike_maxYieldInterval]: number;
    [ContinuationSchedulerMixinLike_currentContinuation]: Optional<QueueableContinuationLike>;
    [ContinuationSchedulerMixinLike_yieldRequested]: boolean;
    [ContinuationSchedulerMixinLike_startTime]: number;

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
      QueueCollectionLike<QueueableContinuationLike>,
      CollectionLike<QueueableContinuationLike>,
      ContinuationContextLike {
    [QueueableContinuationLike_activeChild]: Optional<QueueableContinuationLike>;

    [QueueableContinuationLike_parent]: Optional<QueueableContinuationLike>;

    readonly [QueueableContinuationLike_scheduler]: ContinuationSchedulerMixinLike;
    readonly [QueueableContinuationLike_effect]: SideEffect1<ContinuationContextLike>;
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

          init(
            IndexedQueueMixin<QueueableContinuationLike>(),
            instance,
            MAX_SAFE_INTEGER,
            "overflow",
          );

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
        }),
        {
          [ContinuationLike_run](
            this: QueueableContinuationLike &
              QueueCollectionLike<QueueableContinuationLike> &
              TContinuationProperties &
              SchedulerLike,
          ): void {
            const scheduler = this[QueueableContinuationLike_scheduler];

            scheduler[ContinuationSchedulerMixinLike_startTime] =
              this[SchedulerLike_now];
            scheduler[ContinuationSchedulerMixinLike_currentContinuation] =
              this;
            scheduler[ContinuationSchedulerMixinLike_yieldRequested] = false;

            runContinuation(this);

            scheduler[ContinuationSchedulerMixinLike_yieldRequested] = false;
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
    let parent = instance[ContinuationSchedulerMixinLike_currentContinuation];
    let activeChild = parent?.[QueueableContinuationLike_activeChild];

    while (isSome(activeChild) && activeChild !== parent) {
      parent = activeChild;
      activeChild = parent[QueueableContinuationLike_activeChild];
    }
    return parent;
  };

  type TSchedulerProperties = {
    [SchedulerLike_maxYieldInterval]: number;
    [ContinuationSchedulerMixinLike_currentContinuation]: Optional<QueueableContinuationLike>;
    [ContinuationSchedulerMixinLike_yieldRequested]: boolean;
    [ContinuationSchedulerMixinLike_startTime]: number;
  };

  return mix<
    Function2<
      Omit<
        ContinuationSchedulerMixinLike,
        keyof DisposableLike | typeof SchedulerLike_maxYieldInterval
      > &
        Mutable<TSchedulerProperties>,
      number,
      ContinuationSchedulerLike & ContinuationSchedulerImplementationLike
    >,
    ReturnType<typeof props<TSchedulerProperties>>,
    Omit<
      ContinuationSchedulerMixinLike,
      | keyof DisposableLike
      | typeof SchedulerLike_maxYieldInterval
      | keyof ContinuationSchedulerImplementationLike
      | keyof TSchedulerProperties
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
    ): ContinuationSchedulerLike & ContinuationSchedulerImplementationLike {
      init(DisposableMixin, instance);

      instance[SchedulerLike_maxYieldInterval] =
        clampPositiveInteger(maxYieldInterval);

      return instance;
    },
    props<TSchedulerProperties>({
      [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
      [ContinuationSchedulerMixinLike_currentContinuation]: none,
      [ContinuationSchedulerMixinLike_yieldRequested]: false,
      [ContinuationSchedulerMixinLike_startTime]: 0,
    }),
    {
      get [SchedulerLike_inContinuation](): boolean {
        unsafeCast<ContinuationSchedulerLike & TSchedulerProperties>(this);
        const currentContinuation =
          this[ContinuationSchedulerMixinLike_currentContinuation];
        return isSome(currentContinuation);
      },

      get [SchedulerLike_shouldYield](): boolean {
        unsafeCast<TSchedulerProperties & ContinuationSchedulerLike>(this);
        const inContinuation = this[SchedulerLike_inContinuation];
        const isDisposed = this[DisposableLike_isDisposed];
        const yieldRequested =
          this[ContinuationSchedulerMixinLike_yieldRequested];

        return (
          inContinuation &&
          (isDisposed ||
            yieldRequested ||
            //exceededMaxYieldInterval
            this[SchedulerLike_now] >
              this[ContinuationSchedulerMixinLike_startTime] +
                this[SchedulerLike_maxYieldInterval] ||
            (getActiveContinuation(this)?.[CollectionLike_count] ?? 0) > 0 ||
            this[ContinuationSchedulerImplementationLike_shouldYield])
        );
      },

      [SchedulerLike_requestYield](this: TSchedulerProperties): void {
        this[ContinuationSchedulerMixinLike_yieldRequested] = true;
      },

      [ContinuationSchedulerMixinLike_schedule](
        this: ContinuationSchedulerMixinLike & TSchedulerProperties,
        continuation: QueueableContinuationLike,
        options?: { readonly delay?: number },
      ): void {
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
          continuation[QueueableContinuationLike_parent] === activeContinuation
        ) {
          continuation[QueueableContinuationLike_parent] = none;
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
