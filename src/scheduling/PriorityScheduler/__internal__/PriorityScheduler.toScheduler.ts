import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  Function1,
  SideEffect1,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  ContinuationContextLike,
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

const PrioritySchedulerDelegatingScheduler_priorityScheduler = Symbol(
  "PrioritySchedulerDelegatingScheduler_priorityScheduler",
);
const PrioritySchedulerDelegatingScheduler_priority = Symbol(
  "PrioritySchedulerDelegatingScheduler_priority",
);

type TProperties = {
  readonly [PrioritySchedulerDelegatingScheduler_priorityScheduler]: PrioritySchedulerLike;
  readonly [PrioritySchedulerDelegatingScheduler_priority]: number;
};

const createSchedulerInstance = /*@__PURE__*/ createInstanceFactory(
  mix(
    include(Disposable_mixin),
    function PrioritySchedulerDelegatingScheduler(
      instance: Pick<
        SchedulerLike,
        | typeof SchedulerLike_inContinuation
        | typeof SchedulerLike_now
        | typeof SchedulerLike_shouldYield
        | typeof SchedulerLike_requestYield
        | typeof SchedulerLike_schedule
      > &
        Mutable<TProperties>,
      scheduler: PrioritySchedulerLike,
      priority: number,
    ): SchedulerLike {
      init(Disposable_mixin, instance);

      instance[PrioritySchedulerDelegatingScheduler_priorityScheduler] =
        scheduler;
      instance[PrioritySchedulerDelegatingScheduler_priority] = priority;

      return instance;
    },
    props<TProperties>({
      [PrioritySchedulerDelegatingScheduler_priorityScheduler]: none,
      [PrioritySchedulerDelegatingScheduler_priority]: 0,
    }),
    {
      get [SchedulerLike_inContinuation]() {
        unsafeCast<TProperties>(this);
        return this[PrioritySchedulerDelegatingScheduler_priorityScheduler][
          SchedulerLike_inContinuation
        ];
      },
      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return this[PrioritySchedulerDelegatingScheduler_priorityScheduler][
          SchedulerLike_now
        ];
      },
      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return this[PrioritySchedulerDelegatingScheduler_priorityScheduler][
          SchedulerLike_shouldYield
        ];
      },
      [SchedulerLike_requestYield](this: TProperties): void {
        this[PrioritySchedulerDelegatingScheduler_priorityScheduler][
          SchedulerLike_requestYield
        ]();
      },
      [SchedulerLike_schedule](
        this: TProperties & DisposableLike,
        effect: SideEffect1<ContinuationContextLike>,
        options?: { readonly delay?: number },
      ): DisposableLike {
        const scheduler =
          this[PrioritySchedulerDelegatingScheduler_priorityScheduler];
        return pipe(
          scheduler[SchedulerLike_schedule](effect, {
            ...options,
            priority: this[PrioritySchedulerDelegatingScheduler_priority],
          }),
          Disposable_addToIgnoringChildErrors(this),
        );
      },
    },
  ),
);

const PriorityScheduler_toScheduler = (
  priority: number,
): Function1<PrioritySchedulerLike, SchedulerLike> =>
  pipe(createSchedulerInstance, partial(priority));

export default PriorityScheduler_toScheduler;
