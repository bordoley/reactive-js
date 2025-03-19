import {
  Mixin,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, returns, tuple } from "../../../functions.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import LiftedListenerMixin, {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ConsumerLike,
  ListenerLike,
  ObserverLike,
  SinkLike,
} from "../../../utils.js";

const PairwiseMixin: <T>() => Mixin<
  Pick<LiftedListenerLike<T, Tuple2<T, T>>, typeof LiftedListenerLike_notify>
> = /*@__PURE__*/ (<T>() => {
  const PairwiseMixin_hasPrev = Symbol("PairwiseMixin_hasPrev");
  const PairwiseMixin_prev = Symbol("PairwiseMixin_prev");

  interface TProperties {
    [PairwiseMixin_hasPrev]: boolean;
    [PairwiseMixin_prev]: T;
  }

  return returns(
    mix(
      function PairWiseMixin(
        this: Pick<
          LiftedListenerLike<T, Tuple2<T, T>>,
          typeof LiftedListenerLike_notify
        > &
          TProperties,
      ): Pick<
        LiftedListenerLike<T, Tuple2<T, T>>,
        typeof LiftedListenerLike_notify
      > {
        return this;
      },
      props<TProperties>({
        [PairwiseMixin_prev]: none,
        [PairwiseMixin_hasPrev]: false,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<T, Tuple2<T, T>>,
          next: T,
        ) {
          const prev = this[PairwiseMixin_prev];
          const hasPrev = this[PairwiseMixin_hasPrev];

          this[PairwiseMixin_hasPrev] = true;
          this[PairwiseMixin_prev] = next;

          if (hasPrev) {
            const pair = tuple(prev, next);
            this[LiftedListenerLike_notifyDelegate](pair);
          }
        },
      },
    ),
  );
})();

export const createListener: <T>(
  delegate: ListenerLike<Tuple2<T, T>>,
) => ListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), PairwiseMixin()),
    function PairwiseListener(
      this: unknown,
      delegate: ListenerLike<Tuple2<T, T>>,
    ): ListenerLike<T> {
      init(LiftedListenerMixin<T, Tuple2<T, T>>(), this, delegate);
      init(PairwiseMixin(), this);

      return this;
    },
  ))();

export const createSink: <T>(delegate: SinkLike<Tuple2<T, T>>) => SinkLike<T> =
  /*@__PURE__*/ (<T>() =>
    mixInstanceFactory(
      include(LiftedSinkMixin(), PairwiseMixin()),
      function PairwiseSink(
        this: unknown,
        delegate: SinkLike<Tuple2<T, T>>,
      ): SinkLike<T> {
        init(LiftedSinkMixin<T, Tuple2<T, T>>(), this, delegate);
        init(PairwiseMixin(), this);

        return this;
      },
    ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<Tuple2<T, T>>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), PairwiseMixin()),
    function PairwiseConsumer(
      this: unknown,
      delegate: ConsumerLike<Tuple2<T, T>>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T, Tuple2<T, T>>(), this, delegate);
      init(PairwiseMixin(), this);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<Tuple2<T, T>>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), PairwiseMixin()),
    function PairwiseObserver(
      this: unknown,
      delegate: ObserverLike<Tuple2<T, T>>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T, Tuple2<T, T>>(), this, delegate, none);
      init(PairwiseMixin(), this);

      return this;
    },
  ))();
