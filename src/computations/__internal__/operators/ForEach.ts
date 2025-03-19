import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none, returns } from "../../../functions.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { ConsumerLike, ObserverLike, SinkLike } from "../../../utils.js";

const ForEachMixin: <T>() => Mixin1<
  Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify>,
  SideEffect1<T>
> = /*@__PURE__*/ (<T>() => {
  const ForEachMixin_effect = Symbol("ForEachMixin_effect");

  interface TProperties {
    [ForEachMixin_effect]: SideEffect1<T>;
  }

  return returns(
    mix(
      function ForEachMixin(
        this: Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify> &
          TProperties,
        effect: SideEffect1<T>,
      ): Pick<LiftedListenerLike<T>, typeof LiftedListenerLike_notify> {
        this[ForEachMixin_effect] = effect;

        return this;
      },
      props<TProperties>({
        [ForEachMixin_effect]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<T>,
          next: T,
        ) {
          this[ForEachMixin_effect](next);

          this[LiftedListenerLike_notifyDelegate](next);
        },
      },
    ),
  );
})();

export const createSink: <T>(
  delegate: SinkLike<T>,
  effect: SideEffect1<T>,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), ForEachMixin()),
    function ForEachSink(
      this: unknown,
      delegate: SinkLike<T>,
      effect: SideEffect1<T>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(ForEachMixin(), this, effect);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  effect: SideEffect1<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), ForEachMixin()),
    function ForEachConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
      effect: SideEffect1<T>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(ForEachMixin(), this, effect);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  effect: SideEffect1<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), ForEachMixin()),
    function ForEachObserver(
      this: unknown,
      delegate: ObserverLike<T>,
      effect: SideEffect1<T>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, null);
      init(ForEachMixin(), this, effect);

      return this;
    },
  ))();
