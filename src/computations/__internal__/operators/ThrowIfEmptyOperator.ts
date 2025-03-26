import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Optional, error, none, raise } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
  DelegatingLiftedOperatorLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedOperatorLike<TSubscription, T>,
  factory: Factory<unknown>,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const ThrowIfEmptyMixin_isEmpty = Symbol("ThrowIfEmptyMixin_isEmpty");
  const ThrowIfEmptyMixin_factory = Symbol("ThrowIfEmptyMixin_factory");

  type TProperties = {
    [ThrowIfEmptyMixin_isEmpty]: boolean;
    [ThrowIfEmptyMixin_factory]: Factory<unknown>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function ThrowIfEmptyOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, T>,
      factory: Factory<unknown>,
    ): LiftedOperatorLike<TSubscription, T> {
      init(DelegatingLiftedOperatorMixin<TSubscription, T>(), this, delegate);
      this[ThrowIfEmptyMixin_factory] = factory;

      return this;
    },
    props<TProperties>({
      [ThrowIfEmptyMixin_factory]: none,
      [ThrowIfEmptyMixin_isEmpty]: true,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<TSubscription, T>,
        next: T,
      ) {
        this[ThrowIfEmptyMixin_isEmpty] = false;

        this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](
          next,
        );
      },

      [DelegatingLiftedOperatorLike_onCompleted](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, ArrayBuffer, string>,
      ) {
        const factory = this[ThrowIfEmptyMixin_factory];

        let err: Optional<Error> = none;
        if (this[ThrowIfEmptyMixin_isEmpty]) {
          try {
            err = error(factory());
          } catch (e) {
            err = error(e);
          }

          raise(err);
        }
        this[DelegatingLiftedOperatorLike_delegate][
          LiftedOperatorLike_complete
        ]();
      },
    }),
  );
})();
