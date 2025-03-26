import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, none } from "../../../functions.js";
import { DisposableLike, EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T, TAcc>(
  delegate: LiftedSinkLike<TSubscription, TAcc>,
  selector: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
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
    include(DelegatingLiftedSinkMixin<TSubscription, T, TAcc>()),
    function ScanOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T, TAcc>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T, TAcc>(), this, delegate);

      this[ScanOperator_reducer] = reducer;
      this[ScanOperator_acc] = initialValue();

      return this;
    },
    props<TProperties>({
      [ScanOperator_acc]: none,
      [ScanOperator_reducer]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T, TAcc>,
        next: T,
      ) {
        const oldAcc = this[ScanOperator_acc];
        const nextAcc = this[ScanOperator_reducer](oldAcc, next);
        this[ScanOperator_acc] = nextAcc;

        this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
          nextAcc,
        );
      },
    }),
  );
})();
