import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { DelegatingSchedulerMixin_delegate } from "../../../__internal__/symbols.js";
import { SideEffect1, none, pipe, unsafeCast } from "../../../functions.js";
import {
  ContinuationContextLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";

const Scheduler_delegatingMixin: Mixin1<
  Omit<SchedulerLike, keyof DisposableLike>,
  SchedulerLike
> = /*@__PURE__*/ (() => {
  type TProperties = {
    [DelegatingSchedulerMixin_delegate]: SchedulerLike;
  };

  return mix(
    function DelegatingSchedulerMixin(
      instance: Omit<SchedulerLike, keyof DisposableLike> & TProperties,
      delegate: SchedulerLike,
    ): Omit<SchedulerLike, keyof DisposableLike> {
      instance[DelegatingSchedulerMixin_delegate] = delegate;

      return instance;
    },
    props<TProperties>({
      [DelegatingSchedulerMixin_delegate]: none,
    }),
    {
      get [SchedulerLike_inContinuation]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerMixin_delegate][
          SchedulerLike_inContinuation
        ];
      },

      get [SchedulerLike_maxYieldInterval]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerMixin_delegate][
          SchedulerLike_maxYieldInterval
        ];
      },

      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerMixin_delegate][SchedulerLike_now];
      },

      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerMixin_delegate][
          SchedulerLike_shouldYield
        ];
      },

      [SchedulerLike_requestYield](this: TProperties) {
        this[DelegatingSchedulerMixin_delegate][SchedulerLike_requestYield]();
      },

      [SchedulerLike_schedule](
        this: TProperties & SchedulerLike,
        continuation: SideEffect1<ContinuationContextLike>,
        options?: {
          readonly delay?: number;
        },
      ): DisposableLike {
        return pipe(
          this[DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](
            continuation,
            options,
          ),
          Disposable_addToIgnoringChildErrors(this),
        );
      },
    },
  );
})();

export default Scheduler_delegatingMixin;
