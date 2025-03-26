import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, none } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T, TAcc>(
  delegate: LiftedOperatorLike<TSubscription, TAcc>,
  selector: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
  TAcc,
>() => {
  const ScanOperator_acc = Symbol("ScanOperator_acc");
  const ScanOperator_reducer = Symbol("ScanOperator_reducer");

  type TProperties = {
    [ScanOperator_acc]: TAcc;
    [ScanOperator_reducer]: Reducer<T, TAcc>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<TSubscription, T, TAcc>()),
    function ScanOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T, TAcc>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): LiftedOperatorLike<TSubscription, T> {
      init(
        DelegatingLiftedOperatorMixin<TSubscription, T, TAcc>(),
        this,
        delegate,
      );

      this[ScanOperator_reducer] = reducer;
      this[ScanOperator_acc] = initialValue();

      return this;
    },
    props<TProperties>({
      [ScanOperator_acc]: none,
      [ScanOperator_reducer]: none,
    }),
    proto({
      [LiftedOperatorLike_notify](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, T, TAcc>,
        next: T,
      ) {
        const oldAcc = this[ScanOperator_acc];
        const nextAcc = this[ScanOperator_reducer](oldAcc, next);
        this[ScanOperator_acc] = nextAcc;

        this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](
          nextAcc,
        );
      },
    }),
  );
})();
