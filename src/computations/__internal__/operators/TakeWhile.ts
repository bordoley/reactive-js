import {
  Mixin2,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, Predicate, none, returns } from "../../../functions.js";
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

export const TakeWhileLike_complete = Symbol("TakeWhileLike_complete");

export interface TakeWhileLike<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
> extends LiftedListenerLike<T, T, TDelegateListener> {
  [TakeWhileLike_complete](): void;
}
const TakeWhileMixin: <
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => Mixin2<
  Pick<
    TakeWhileLike<T, TDelegateListener>,
    typeof LiftedListenerLike_notify | typeof TakeWhileLike_complete
  >,
  Predicate<T>,
  Optional<{ readonly inclusive?: boolean }>
> = /*@__PURE__*/ (<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => {
  const TakeWhileMixin_inclusive = Symbol("TakeWhileMixin_inclusive");
  const TakeWhileMixin_predicate = Symbol("TakeWhileMixin_predicate");

  interface TProperties {
    [TakeWhileMixin_inclusive]: boolean;
    [TakeWhileMixin_predicate]: Predicate<T>;
  }

  return returns(
    mix(
      function TakeWhileMixin(
        this: Pick<
          TakeWhileLike<T, TDelegateListener>,
          typeof LiftedListenerLike_notify | typeof TakeWhileLike_complete
        > &
          TProperties,
        predicate: Predicate<T>,
        options: Optional<{ readonly inclusive?: boolean }>,
      ): Pick<
        TakeWhileLike<T, TDelegateListener>,
        typeof LiftedListenerLike_notify | typeof TakeWhileLike_complete
      > {
        this[TakeWhileMixin_predicate] = predicate;
        this[TakeWhileMixin_inclusive] = options?.inclusive ?? false;

        return this;
      },
      props<TProperties>({
        [TakeWhileMixin_predicate]: none,
        [TakeWhileMixin_inclusive]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & TakeWhileLike<T>,
          next: T,
        ) {
          const satisfiesPredicate = this[TakeWhileMixin_predicate](next);
          const isInclusive = this[TakeWhileMixin_inclusive];

          if (satisfiesPredicate || isInclusive) {
            this[LiftedListenerLike_notifyDelegate](next);
          }

          if (!satisfiesPredicate) {
            this[TakeWhileLike_complete]();
          }
        },

        [TakeWhileLike_complete](this: DisposableLike) {
          this[DisposableLike_dispose]();
        },
      },
    ),
  );
})();

const TakeWhileSinkMixin: <
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => Mixin2<
  Pick<
    TakeWhileLike<T, TDelegateListener>,
    typeof LiftedListenerLike_notify | typeof TakeWhileLike_complete
  >,
  Predicate<T>,
  Optional<{ readonly inclusive?: boolean }>
> = /*@__PURE__*/ (<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => {
  return returns(
    mix(
      include(LiftedSinkMixin(), TakeWhileMixin()),
      function TakeWhileSink(
        this: unknown,
        predicate: Predicate<T>,
        options: Optional<{ readonly inclusive?: boolean }>,
      ): Pick<
        TakeWhileLike<T, TDelegateListener>,
        typeof LiftedListenerLike_notify | typeof TakeWhileLike_complete
      > {
        init(TakeWhileMixin<T>(), this, predicate, options);

        return this;
      },
      props(),
      proto({
        [TakeWhileLike_complete](this: SinkLike) {
          this[SinkLike_complete]();
        },
      }),
    ),
  );
})();

export const createListener: <T>(
  delegate: ListenerLike<T>,
  predicate: Predicate<T>,
  options?: Optional<{ readonly inclusive?: boolean }>,
) => ListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), TakeWhileMixin()),
    function TakeWhileListener(
      this: unknown,
      delegate: ListenerLike<T>,
      predicate: Predicate<T>,
      options: Optional<{ readonly inclusive?: boolean }>,
    ): ListenerLike<T> {
      init(LiftedListenerMixin<T>(), this, delegate);
      init(TakeWhileMixin<T>(), this, predicate, options);

      return this;
    },
  ))();

export const createSink: <T>(
  delegate: SinkLike<T>,
  predicate: Predicate<T>,
  options?: Optional<{ readonly inclusive?: boolean }>,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), TakeWhileMixin()),
    function TakeWhileSink(
      this: unknown,
      delegate: SinkLike<T>,
      predicate: Predicate<T>,
      options?: Optional<{ readonly inclusive?: boolean }>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(TakeWhileSinkMixin(), this, predicate, options);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  predicate: Predicate<T>,
  options?: Optional<{ readonly inclusive?: boolean }>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), TakeWhileMixin()),
    function TakeWhileConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
      predicate: Predicate<T>,
      options?: Optional<{ readonly inclusive?: boolean }>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(TakeWhileSinkMixin(), this, predicate, options);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  options?: Optional<{ readonly inclusive?: boolean }>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), TakeWhileMixin()),
    function TakeWhileConsumer(
      this: unknown,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      options?: Optional<{ readonly inclusive?: boolean }>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);
      init(TakeWhileSinkMixin(), this, predicate, options);

      return this;
    },
  ))();
