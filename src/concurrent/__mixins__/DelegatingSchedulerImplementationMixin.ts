import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import {
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../concurrent.js";
import { Function2, SideEffect1, none, pipe } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";

const DelegatingSchedulerImplementationMixin: Mixin1<
  SchedulerLike & DisposableLike,
  SchedulerLike,
  DisposableLike
> = /*@__PURE__*/ (() => {
  const DelegatingSchedulerImplementationMixin_delegate = Symbol(
    "DelegatingSchedulerImplementationMixin_delegate",
  );

  type TProperties = {
    [DelegatingSchedulerImplementationMixin_delegate]: SchedulerLike;
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
      instance[DelegatingSchedulerImplementationMixin_delegate] = delegate;

      return instance;
    },
    props<TProperties>({
      [DelegatingSchedulerImplementationMixin_delegate]: none,
    }),
    {
      get [SchedulerLike_inContinuation]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_inContinuation
        ];
      },

      get [SchedulerLike_maxYieldInterval]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_maxYieldInterval
        ];
      },

      get [SchedulerLike_now]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_now
        ];
      },

      get [SchedulerLike_shouldYield]() {
        unsafeCast<TProperties>(this);
        return this[DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_shouldYield
        ];
      },

      [SchedulerLike_requestYield](this: TProperties) {
        this[DelegatingSchedulerImplementationMixin_delegate][
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
          this[DelegatingSchedulerImplementationMixin_delegate][
            SchedulerLike_schedule
          ](continuation, options),
          Disposable.addTo(this, { ignoreChildErrors: true }),
        );
      },

      [SchedulerLike_yield](
        this: TProperties & SchedulerLike & DisposableLike,
        delay?: number,
      ) {
        this[DelegatingSchedulerImplementationMixin_delegate][
          SchedulerLike_yield
        ](delay);
      },
    },
  );
})();

export default DelegatingSchedulerImplementationMixin;
