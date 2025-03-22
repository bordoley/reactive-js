import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate, none, returns } from "../../../functions.js";
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

const KeepMixin: <T>() => Mixin1<
  Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify>,
  Predicate<T>
> = /*@__PURE__*/ (<T>() => {
  const KeepMixin_predicate = Symbol("KeepMixin_predicate");

  interface TProperties {
    [KeepMixin_predicate]: Predicate<T>;
  }

  return returns(
    mix(
      function KeepMixin(
        this: Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify> &
          TProperties,
        predicate: Predicate<T>,
      ): Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify> {
        this[KeepMixin_predicate] = predicate;

        return this;
      },
      props<TProperties>({
        [KeepMixin_predicate]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<T>,
          next: T,
        ) {
          const shouldNotify = this[KeepMixin_predicate](next);

          if (shouldNotify) {
            this[LiftedListenerLike_notifyDelegate](next);
          }
        },
      },
    ),
  );
})();

export const createListener: <T>(
  delegate: ListenerLike<T>,
  predicate: Predicate<T>,
) => ListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), KeepMixin()),
    function KeepListener(
      this: unknown,
      delegate: ListenerLike<T>,
      predicate: Predicate<T>,
    ): ListenerLike<T> {
      init(LiftedListenerMixin<T>(), this, delegate);
      init(KeepMixin(), this, predicate);

      return this;
    },
  ))();

export const createSink: <T>(
  delegate: SinkLike<T>,
  predicate: Predicate<T>,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), KeepMixin()),
    function KeepSink(
      this: unknown,
      delegate: SinkLike<T>,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(KeepMixin(), this, predicate);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  predicate: Predicate<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), KeepMixin()),
    function KeepConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
      predicate: Predicate<T>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(KeepMixin(), this, predicate);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), KeepMixin()),
    function KeepObserver(
      this: unknown,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);
      init(KeepMixin(), this, predicate);

      return this;
    },
  ))();
