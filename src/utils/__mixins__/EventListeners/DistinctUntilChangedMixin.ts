import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { Equality, none, returns } from "../../../functions.js";
import {
  LiftedEventListenerLike,
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../LiftedEventListenerMixin.js";

const DistinctUntilChangedMixin: <T>() => Mixin1<
  Pick<LiftedEventListenerLike<T>, typeof LiftedEventListenerLike_notify>,
  Equality<T>
> = /*@__PURE__*/ (<T>() => {
  const DistinctUntilChangedMixin_equality = Symbol(
    "DistinctUntilChangedMixin_equality",
  );
  const DistinctUntilChangedMixin_prev = Symbol(
    "DistinctUntilChangedMixin_prev",
  );
  const DistinctUntilChangedMixin_hasValue = Symbol(
    "DistinctUntilChangedMixin_hasValue",
  );

  type TProperties = {
    [DistinctUntilChangedMixin_equality]: Equality<T>;
    [DistinctUntilChangedMixin_prev]: T;
    [DistinctUntilChangedMixin_hasValue]: boolean;
  };

  return returns(
    mix(
      function DistinctUntilChangedMixin(
        this: Pick<
          LiftedEventListenerLike<T>,
          typeof LiftedEventListenerLike_notify
        > &
          TProperties,
        equality: Equality<T>,
      ): Pick<
        LiftedEventListenerLike<T>,
        typeof LiftedEventListenerLike_notify
      > {
        this[DistinctUntilChangedMixin_equality] = equality;

        return this;
      },
      props<TProperties>({
        [DistinctUntilChangedMixin_equality]: none,
        [DistinctUntilChangedMixin_prev]: none,
        [DistinctUntilChangedMixin_hasValue]: false,
      }),
      {
        [LiftedEventListenerLike_notify](
          this: TProperties & LiftedEventListenerLike<T>,
          next: T,
        ) {
          const shouldEmit =
            !this[DistinctUntilChangedMixin_hasValue] ||
            !this[DistinctUntilChangedMixin_equality](
              this[DistinctUntilChangedMixin_prev],
              next,
            );

          if (shouldEmit) {
            this[DistinctUntilChangedMixin_prev] = next;
            this[DistinctUntilChangedMixin_hasValue] = true;
            this[LiftedEventListenerLike_notifyDelegate](next);
          }
        },
      },
    ),
  );
})();

export default DistinctUntilChangedMixin;
