import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, none, returns } from "../../../functions.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import LiftedListenerMixin, {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ConsumerLike,
  ListenerLike,
  ObserverLike,
  SinkLike,
} from "../../../utils.js";

const MapMixin: <TA, TB>() => Mixin1<
  Pick<LiftedSinkLike<TA, TB>, typeof LiftedListenerLike_notify>,
  Function1<TA, TB>
> = /*@__PURE__*/ (<TA, TB>() => {
  const MapMixin_selector = Symbol("MapMixin_selector");

  interface TProperties {
    [MapMixin_selector]: Function1<TA, TB>;
  }

  return returns(
    mix(
      function MapMixin(
        this: Pick<
          LiftedListenerLike<TA, TB>,
          typeof LiftedListenerLike_notify
        > &
          TProperties,
        selector: Function1<TA, TB>,
      ): Pick<LiftedListenerLike<TA, TB>, typeof LiftedListenerLike_notify> {
        this[MapMixin_selector] = selector;

        return this;
      },
      props<TProperties>({
        [MapMixin_selector]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<TA, TB>,
          next: TA,
        ) {
          const mapped = this[MapMixin_selector](next);
          this[LiftedListenerLike_notifyDelegate](mapped);
        },
      },
    ),
  );
})();

export const createListener: <TA, TB>(
  delegate: ListenerLike<TB>,
  selector: Function1<TA, TB>,
) => ListenerLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), MapMixin()),
    function MapListener(
      this: unknown,
      delegate: ListenerLike<TB>,
      selector: Function1<TA, TB>,
    ): ListenerLike<TA> {
      init(LiftedListenerMixin<TA, TB>(), this, delegate);
      init(MapMixin<TA, TB>(), this, selector);

      return this;
    },
  ))();

export const createSink: <TA, TB>(
  delegate: SinkLike<TB>,
  selector: Function1<TA, TB>,
) => SinkLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), MapMixin()),
    function MapSink(
      this: unknown,
      delegate: SinkLike<TB>,
      selector: Function1<TA, TB>,
    ): SinkLike<TA> {
      init(LiftedSinkMixin<TA, TB>(), this, delegate);
      init(MapMixin<TA, TB>(), this, selector);

      return this;
    },
  ))();

export const createConsumer: <TA, TB>(
  delegate: ConsumerLike<TB>,
  selector: Function1<TA, TB>,
) => ConsumerLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), MapMixin()),
    function MapConsumer(
      this: unknown,
      delegate: ConsumerLike<TB>,
      selector: Function1<TA, TB>,
    ): ConsumerLike<TA> {
      init(LiftedConsumerMixin<TA, TB>(), this, delegate);
      init(MapMixin<TA, TB>(), this, selector);

      return this;
    },
  ))();

export const createObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  selector: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), MapMixin()),
    function MapObserver(
      this: unknown,
      delegate: ObserverLike<TB>,
      selector: Function1<TA, TB>,
    ): ObserverLike<TA> {
      init(LiftedObserverMixin<TA, TB>(), this, delegate, null);
      init(MapMixin<TA, TB>(), this, selector);

      return this;
    },
  ))();
