import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Optional, error, none, returns } from "../../../functions.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  ObserverLike,
  SinkLike,
} from "../../../utils.js";

const ThrowIfEmptyMixin: <T>() => Mixin1<
  LiftedSinkLike<T>,
  Factory<unknown>,
  LiftedSinkLike<T>
> = (<T>() => {
  const ThrowIfEmptyMixin_isEmpty = Symbol("ThrowIfEmptyMixin_isEmpty");
  const ThrowIfEmptyMixin_factory = Symbol("ThrowIfEmptyMixin_factory");

  type TProperties = {
    [ThrowIfEmptyMixin_isEmpty]: boolean;
    [ThrowIfEmptyMixin_factory]: Factory<unknown>;
  };

  return returns(
    mix<
      LiftedSinkLike<T>,
      TProperties,
      Pick<
        LiftedSinkLike<T>,
        typeof LiftedListenerLike_notify | typeof LiftedSinkLike_complete
      >,
      LiftedSinkLike<T>,
      Factory<unknown>
    >(
      function ThrowIfEmptyMixin(
        this: LiftedSinkLike<T> & TProperties,
        factory: Factory<unknown>,
      ): LiftedSinkLike<T> {
        this[ThrowIfEmptyMixin_factory] = factory;

        return this;
      },
      props<TProperties>({
        [ThrowIfEmptyMixin_isEmpty]: true,
        [ThrowIfEmptyMixin_factory]: none,
      }),
      proto({
        [LiftedListenerLike_notify](
          this: TProperties & LiftedObserverLike<T>,
          next: T,
        ) {
          this[ThrowIfEmptyMixin_isEmpty] = false;
          this[LiftedListenerLike_notifyDelegate](next);
        },
        [LiftedSinkLike_complete](this: TProperties & LiftedObserverLike<T>) {
          const factory = this[ThrowIfEmptyMixin_factory];

          let err: Optional<Error> = none;
          if (this[ThrowIfEmptyMixin_isEmpty]) {
            try {
              err = error(factory());
            } catch (e) {
              err = error(e);
            }
            this[DisposableLike_dispose](err);
          } else {
            this[LiftedSinkLike_completeDelegate]();
          }
        },
      }),
    ),
  );
})();

export const createSink: <T>(
  delegate: SinkLike<T>,
  factory: Factory<unknown>,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), ThrowIfEmptyMixin()),
    function ThrowIfEmptySink(
      this: unknown,
      delegate: SinkLike<T>,
      factory: Factory<unknown>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(ThrowIfEmptyMixin(), this, factory);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  factory: Factory<unknown>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), ThrowIfEmptyMixin()),
    function ThrowIfEmptyConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
      factory: Factory<unknown>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(ThrowIfEmptyMixin(), this, factory);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  factory: Factory<unknown>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), ThrowIfEmptyMixin()),
    function ThrowIfEmptyObserver(
      this: unknown,
      delegate: ObserverLike<T>,
      factory: Factory<unknown>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, null);
      init(ThrowIfEmptyMixin(), this, factory);

      return this;
    },
  ))();
