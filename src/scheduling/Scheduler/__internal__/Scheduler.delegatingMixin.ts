import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingSchedulerMixin_delegate } from "../../../__internal__/symbols.js";
import {
  Function2,
  SideEffect1,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";

const Scheduler_delegatingMixin: Mixin1<
  SchedulerLike & DisposableLike,
  SchedulerLike,
  DisposableLike
> = /*@__PURE__*/ (() => {
  type TProperties = {
    [__DelegatingSchedulerMixin_delegate]: SchedulerLike;
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
    function DelegatingSchedulerMixin(
      instance: SchedulerLike & TProperties & DisposableLike,
      delegate: SchedulerLike,
    ): SchedulerLike & DisposableLike {
      instance[__DelegatingSchedulerMixin_delegate] = delegate;

      return instance;
    },
    props<TProperties>({
      [__DelegatingSchedulerMixin_delegate]: none,
    }),
    {
      get [SchedulerLike_inContinuation]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerMixin_delegate][
          SchedulerLike_inContinuation
        ];
      },

      get [SchedulerLike_maxYieldInterval]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerMixin_delegate][
          SchedulerLike_maxYieldInterval
        ];
      },

      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerMixin_delegate][SchedulerLike_now];
      },

      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return this[__DelegatingSchedulerMixin_delegate][
          SchedulerLike_shouldYield
        ];
      },

      [SchedulerLike_requestYield](this: TProperties) {
        this[__DelegatingSchedulerMixin_delegate][SchedulerLike_requestYield]();
      },

      [SchedulerLike_schedule](
        this: TProperties & SchedulerLike & DisposableLike,
        continuation: SideEffect1<SchedulerLike>,
        options?: {
          readonly delay?: number;
        },
      ): DisposableLike {
        return pipe(
          this[__DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](
            continuation,
            options,
          ),
          Disposable_addToIgnoringChildErrors(this),
        );
      },

      [SchedulerLike_yield](
        this: TProperties & SchedulerLike & DisposableLike,
        delay?: number,
      ) {
        this[__DelegatingSchedulerMixin_delegate][SchedulerLike_yield](delay);
      },
    },
  );
})();

export default Scheduler_delegatingMixin;
