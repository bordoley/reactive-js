import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, tuple } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T>(
  delegate: LiftedSinkLike<TSubscription, Tuple2<T, T>>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
>() => {
  const PairwiseSink_hasPrev = Symbol("PairwiseSink_hasPrev");
  const PairwiseSink_prev = Symbol("PairwiseSink_prev");

  type TProperties = {
    [PairwiseSink_hasPrev]: boolean;
    [PairwiseSink_prev]: T;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function BufferSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, Tuple2<T, T>>,
    ): LiftedSinkLike<TSubscription, T> {
      init(
        DelegatingLiftedSinkMixin<TSubscription, Tuple2<T, T>>(),
        this,
        delegate,
      );

      return this;
    },
    props<TProperties>({
      [PairwiseSink_prev]: none,
      [PairwiseSink_hasPrev]: false,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, T, Tuple2<T, T>>,
        next: T,
      ) {
        const prev = this[PairwiseSink_prev];
        const hasPrev = this[PairwiseSink_hasPrev];

        this[PairwiseSink_hasPrev] = true;
        this[PairwiseSink_prev] = next;

        if (hasPrev) {
          const pair = tuple(prev, next);
          this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
            pair,
          );
        }
      },
    }),
  );
})();
