import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, none, returns } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
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
  DisposableLike,
  DisposableLike_dispose,
  ListenerLike,
  ObserverLike,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";

export const TakeFirstLike_complete = Symbol("TakeFirstLike_complete");

export interface TakeFirstLike<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
> extends LiftedListenerLike<T, T, TDelegateListener> {
  [TakeFirstLike_complete](): void;
}

const TakeFirstMixin: <
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => Mixin1<
  Pick<
    TakeFirstLike<T, TDelegateListener>,
    typeof LiftedListenerLike_notify | typeof TakeFirstLike_complete
  >,
  Optional<number>
> = /*@__PURE__*/ (<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => {
  const TakeFirstMixin_count = Symbol("TakeFirstMixin_count");

  interface TProperties {
    [TakeFirstMixin_count]: number;
  }

  return returns(
    mix(
      function TakeFirstMixin(
        this: Pick<
          TakeFirstLike<T, TDelegateListener>,
          typeof LiftedListenerLike_notify | typeof TakeFirstLike_complete
        > &
          TProperties,
        takeCount: Optional<number>,
      ): Pick<
        TakeFirstLike<T, TDelegateListener>,
        typeof LiftedListenerLike_notify | typeof TakeFirstLike_complete
      > {
        this[TakeFirstMixin_count] = clampPositiveInteger(takeCount ?? 1);

        if (takeCount === 0) {
          this[TakeFirstLike_complete]();
        }

        return this;
      },
      props<TProperties>({
        [TakeFirstMixin_count]: none,
      }),
      proto({
        [LiftedListenerLike_notify](
          this: TProperties & TakeFirstLike<T>,
          next: T,
        ) {
          this[TakeFirstMixin_count];
          this[TakeFirstMixin_count]--;

          this[LiftedListenerLike_notifyDelegate](next);

          if (this[TakeFirstMixin_count] <= 0) {
            this[TakeFirstLike_complete]();
          }
        },

        [TakeFirstLike_complete](this: DisposableLike) {
          this[DisposableLike_dispose]();
        },
      }),
    ),
  );
})();

const TakeFirstSinkMixin: <
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => Mixin1<
  Pick<
    TakeFirstLike<T, TDelegateListener>,
    typeof LiftedListenerLike_notify | typeof TakeFirstLike_complete
  >,
  Optional<number>
> = /*@__PURE__*/ (<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => {
  return returns(
    mix(
      include(LiftedSinkMixin(), TakeFirstMixin()),
      function TakeFirstSink(
        this: unknown,
        takeCount: Optional<number>,
      ): Pick<
        TakeFirstLike<T, TDelegateListener>,
        typeof LiftedListenerLike_notify | typeof TakeFirstLike_complete
      > {
        init(TakeFirstMixin<T>(), this, takeCount);

        return this;
      },
      props(),
      proto({
        [TakeFirstLike_complete](this: SinkLike) {
          this[SinkLike_complete]();
        },
      }),
    ),
  );
})();

export const createListener: <T>(
  delegate: ListenerLike<T>,
  count?: number,
) => ListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), TakeFirstMixin()),
    function TakeFirstListener(
      this: unknown,
      delegate: ListenerLike<T>,
      takeCount: Optional<number>,
    ): ListenerLike<T> {
      init(LiftedListenerMixin<T>(), this, delegate);
      init(TakeFirstMixin<T>(), this, takeCount);

      return this;
    },
  ))();

export const createSink: <T>(
  delegate: SinkLike<T>,
  count?: number,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), TakeFirstMixin()),
    function TakeFirstSink(
      this: unknown,
      delegate: SinkLike<T>,
      takeCount: Optional<number>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(TakeFirstSinkMixin<T>(), this, takeCount);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  count?: number,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), TakeFirstMixin()),
    function TakeFirstSink(
      this: unknown,
      delegate: ConsumerLike<T>,
      takeCount: Optional<number>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(TakeFirstSinkMixin<T>(), this, takeCount);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  count?: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), TakeFirstMixin()),
    function TakeFirstSink(
      this: unknown,
      delegate: ObserverLike<T>,
      takeCount: Optional<number>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);
      init(TakeFirstSinkMixin<T>(), this, takeCount);

      return this;
    },
  ))();
