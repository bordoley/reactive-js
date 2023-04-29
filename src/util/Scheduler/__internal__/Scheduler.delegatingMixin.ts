import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingSchedulerImplementationMixin_delegate } from "../../../__internal__/symbols.js";
import {
  Function2,
  SideEffect1,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DisposableLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

const Scheduler_delegatingMixin: Mixin1<
  SchedulerLike & DisposableLike,
  SchedulerLike,
  DisposableLike
> = /*@__PURE__*/ (() => {
  type TProperties = {
    [__DelegatingSchedulerImplementationMixin_delegate]: SchedulerLike;
  };

  return mix<
    Function2<
      SchedulerLike & TProperties & DisposableLike,
      SchedulerLike,
      SchedulerLike & DisposableLike
    >,
    ReturnType<typeof props<TProperties>>,
    SchedulerLike,
    DisposableLike
  >(
    function DelegatingSchedulerImplementationMixin(
      instance: SchedulerLike & TProperties & DisposableLike,
      delegate: SchedulerLike,
    ): SchedulerLike & DisposableLike {
      instance[__DelegatingSchedulerImplementationMixin_delegate] = delegate;

      return instance;
    },
    props<TProperties>({
      [__DelegatingSchedulerImplementationMixin_delegate]: none,
    }),
    {
      get [SchedulerLike_inContinuation]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_inContinuation
        ];
      },

      get [SchedulerLike_maxYieldInterval]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_maxYieldInterval
        ];
      },

      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_now
        ];
      },

      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_shouldYield
        ];
      },

      [SchedulerLike_requestYield](this: TProperties) {
        this[__DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_requestYield
        ]();
      },

      [SchedulerLike_schedule](
        this: TProperties & SchedulerLike & DisposableLike,
        continuation: SideEffect1<SchedulerLike>,
        options?: {
          readonly delay?: number;
        },
      ): DisposableLike {
        return pipe(
          this[__DelegatingSchedulerImplementationMixin_delegate][
            SchedulerLike_schedule
          ](continuation, options),
          Disposable_addTo(this, { ignoreChildErrors: true }),
        );
      },

      [SchedulerLike_yield](
        this: TProperties & SchedulerLike & DisposableLike,
        delay?: number,
      ) {
        this[__DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_yield
        ](delay);
      },
    },
  );
})();

export default Scheduler_delegatingMixin;
