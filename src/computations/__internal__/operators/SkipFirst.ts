import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Optional, none, returns } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
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

const SkipFirstMixin: <T>() => Mixin1<
  LiftedListenerLike<T>,
  Optional<number>,
  LiftedListenerLike<T>
> = /*@__PURE__*/ (<T>() => {
  const SkipFirstMixin_count = Symbol("SkipFirstMixin_count");

  interface TProperties {
    [SkipFirstMixin_count]: number;
  }

  return returns(
    mix<
      LiftedListenerLike<T>,
      TProperties,
      Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify>,
      LiftedListenerLike<T>,
      Optional<number>
    >(
      function SkipFirstMixin(
        this: LiftedListenerLike<T> & TProperties,
        skipCount: Optional<number>,
      ): LiftedListenerLike<T> {
        this[SkipFirstMixin_count] = clampPositiveInteger(skipCount ?? 1);

        return this;
      },
      props<TProperties>({
        [SkipFirstMixin_count]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<T>,
          next: T,
        ) {
          this[SkipFirstMixin_count] = max(this[SkipFirstMixin_count] - 1, -1);

          const shouldEmit = this[SkipFirstMixin_count] < 0;

          if (shouldEmit) {
            this[LiftedListenerLike_notifyDelegate](next);
          }
        },
      },
    ),
  );
})();

export const createListener: <T>(
  delegate: ListenerLike<T>,
  takeCount: Optional<number>,
) => ListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), SkipFirstMixin()),
    function SkipFirstListener(
      this: unknown,
      delegate: ListenerLike<T>,
      takeCount: Optional<number>,
    ): ListenerLike<T> {
      init(LiftedListenerMixin<T>(), this, delegate, null);
      init(SkipFirstMixin(), this, takeCount);

      return this;
    },
  ))();

export const createSink: <T>(
  delegate: SinkLike<T>,
  takeCount: Optional<number>,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), SkipFirstMixin()),
    function SkipFirstSink(
      this: unknown,
      delegate: SinkLike<T>,
      takeCount: Optional<number>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate, null);
      init(SkipFirstMixin(), this, takeCount);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  takeCount: Optional<number>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), SkipFirstMixin()),
    function SkipFirstConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
      takeCount: Optional<number>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate, null);
      init(SkipFirstMixin(), this, takeCount);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  takeCount: Optional<number>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), SkipFirstMixin()),
    function SkipFirstObserver(
      this: unknown,
      delegate: ObserverLike<T>,
      takeCount: Optional<number>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, null);
      init(SkipFirstMixin(), this, takeCount);

      return this;
    },
  ))();
