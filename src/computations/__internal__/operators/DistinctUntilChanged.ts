import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  Equality,
  Optional,
  none,
  returns,
  strictEquality,
} from "../../../functions.js";
import LiftedConsumerMixin, {
  LiftedConsumerLike,
} from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import LiftedListenerMixin, {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ConsumerLike,
  ListenerLike,
  ObserverLike,
  SinkLike,
} from "../../../utils.js";

const DistinctUntilChangedMixin: <T>() => Mixin1<
  Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify>,
  Optional<{ readonly equality?: Equality<T> }>
> = /*@__PURE__*/ (<T>() => {
  const DistinctUntilChangedMixin_equality = Symbol(
    "DistinctUntilChangedMixin_equality",
  );
  const DistinctUntilChangedMixin_prev = Symbol(
    "DistinctUntilChangedMixin_prev",
  );
  const DistinctUntilChangedMixin_hasValue = Symbol(
    "DistinctUntilChangedMixin_hasValue",
  );

  type TProperties = {
    [DistinctUntilChangedMixin_equality]: Equality<T>;
    [DistinctUntilChangedMixin_prev]: T;
    [DistinctUntilChangedMixin_hasValue]: boolean;
  };

  return returns(
    mix(
      function DistinctUntilChangedMixin(
        this: Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify> &
          TProperties,
        options: Optional<{ readonly equality?: Equality<T> }>,
      ): Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify> {
        this[DistinctUntilChangedMixin_equality] =
          options?.equality ?? strictEquality;

        return this;
      },
      props<TProperties>({
        [DistinctUntilChangedMixin_equality]: none,
        [DistinctUntilChangedMixin_prev]: none,
        [DistinctUntilChangedMixin_hasValue]: false,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<T>,
          next: T,
        ) {
          const shouldEmit =
            !this[DistinctUntilChangedMixin_hasValue] ||
            !this[DistinctUntilChangedMixin_equality](
              this[DistinctUntilChangedMixin_prev],
              next,
            );

          if (shouldEmit) {
            this[DistinctUntilChangedMixin_prev] = next;
            this[DistinctUntilChangedMixin_hasValue] = true;
            this[LiftedListenerLike_notifyDelegate](next);
          }
        },
      },
    ),
  );
})();

export const createListener: <T>(
  delegate: ListenerLike<T>,
  options?: { readonly equality?: Equality<T> },
) => ListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), DistinctUntilChangedMixin()),
    function DistinctUntilChangedListener(
      this: Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify>,
      delegate: ListenerLike<T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): ListenerLike<T> {
      init(LiftedListenerMixin<T>(), this, delegate);
      init(DistinctUntilChangedMixin(), this, options);

      return this;
    },
  ))();

export const createSink: <T>(
  delegate: SinkLike<T>,
  options?: { readonly equality?: Equality<T> },
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), DistinctUntilChangedMixin()),
    function DistinctUntilChangedSink(
      this: Pick<LiftedSinkLike<T>, typeof LiftedListenerLike_notify>,
      delegate: SinkLike<T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(DistinctUntilChangedMixin(), this, options);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  options?: { readonly equality?: Equality<T> },
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), DistinctUntilChangedMixin()),
    function DistinctUntilChangedConsumer(
      this: Pick<LiftedConsumerLike<T>, typeof LiftedListenerLike_notify>,
      delegate: ConsumerLike<T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(DistinctUntilChangedMixin(), this, options);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  options?: { readonly equality?: Equality<T> },
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), DistinctUntilChangedMixin()),
    function DistinctUntilChangedObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedListenerLike_notify>,
      delegate: ObserverLike<T>,
      options: Optional<{ readonly equality?: Equality<T> }>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);
      init(DistinctUntilChangedMixin(), this, options);

      return this;
    },
  ))();
