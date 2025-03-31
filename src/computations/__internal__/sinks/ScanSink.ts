import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, error, none } from "../../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike_notify,
  SinkLike,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T, TAcc>(
  delegate: LiftedSinkLike<TSubscription, TAcc>,
  selector: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
  TAcc,
>() => {
  const ScanSink_acc = Symbol("ScanSink_acc");
  const ScanSink_reducer = Symbol("ScanSink_reducer");

  type TProperties = {
    [ScanSink_acc]: TAcc;
    [ScanSink_reducer]: Reducer<T, TAcc>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T, TAcc>()),
    function ScanSink(
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

      this[ScanSink_reducer] = reducer;

      try {
        this[ScanSink_acc] = initialValue();
      } catch (e) {
        this[DisposableLike_dispose](error(e));
      }

      return this;
    },
    props<TProperties>({
      [ScanSink_acc]: none,
      [ScanSink_reducer]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T, TAcc>,
        next: T,
      ) {
        const oldAcc = this[ScanSink_acc];
        const nextAcc = this[ScanSink_reducer](oldAcc, next);
        this[ScanSink_acc] = nextAcc;

        this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
          nextAcc,
        );
      },
    }),
  );
})();
