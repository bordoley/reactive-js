import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Optional, error, none, raise } from "../../../functions.js";
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

export const create: <T>(
  delegate: LiftedOperatorLike<T>,
  factory: Factory<unknown>,
) => LiftedOperatorLike<T> = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptyMixin_isEmpty = Symbol("ThrowIfEmptyMixin_isEmpty");
  const ThrowIfEmptyMixin_factory = Symbol("ThrowIfEmptyMixin_factory");

  type TProperties = {
    [ThrowIfEmptyMixin_isEmpty]: boolean;
    [ThrowIfEmptyMixin_factory]: Factory<unknown>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<T>()),
    function ThrowIfEmptyOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<T>,
      factory: Factory<unknown>,
    ): LiftedOperatorLike<T> {
      init(DelegatingLiftedOperatorMixin<T>(), this, delegate);
      this[ThrowIfEmptyMixin_factory] = factory;

      return this;
    },
    props<TProperties>({
      [ThrowIfEmptyMixin_factory]: none,
      [ThrowIfEmptyMixin_isEmpty]: true,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties & DelegatingLiftedOperatorLike<T>,
        next: T,
      ) {
        this[ThrowIfEmptyMixin_isEmpty] = false;

        this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](
          next,
        );
      },

      [DelegatingLiftedOperatorLike_onCompleted](
        this: TProperties & DelegatingLiftedOperatorLike<ArrayBuffer, string>,
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
