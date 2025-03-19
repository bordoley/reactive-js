import {
  Mixin2,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, error, none, returns } from "../../../functions.js";
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
} from "../../../utils.js";

const ScanMixin: <T, TAcc>() => Mixin2<
  Pick<LiftedListenerLike<T, TAcc>, typeof LiftedListenerLike_notify>,
  Reducer<T, TAcc>,
  Factory<TAcc>,
  DisposableLike
> = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanMixin_acc = Symbol("ScanMixin_acc");
  const ScanMixin_reducer = Symbol("ScanMixin_reducer");

  type TProperties = {
    [ScanMixin_acc]: TAcc;
    [ScanMixin_reducer]: Reducer<T, TAcc>;
  };

  return returns(
    mix<
      Pick<LiftedListenerLike<T, TAcc>, typeof LiftedListenerLike_notify>,
      TProperties,
      Pick<LiftedListenerLike<T, TAcc>, typeof LiftedListenerLike_notify>,
      DisposableLike,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(
      function ScanMixin(
        this: Pick<
          LiftedListenerLike<T, TAcc>,
          typeof LiftedListenerLike_notify
        > &
          TProperties &
          DisposableLike,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): Pick<LiftedListenerLike<T, TAcc>, typeof LiftedListenerLike_notify> {
        this[ScanMixin_reducer] = reducer;

        try {
          this[ScanMixin_acc] = initialValue();
        } catch (e) {
          this[DisposableLike_dispose](error(e));
        }

        return this;
      },
      props<TProperties>({
        [ScanMixin_acc]: none,
        [ScanMixin_reducer]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<T, TAcc>,
          next: T,
        ) {
          const oldAcc = this[ScanMixin_acc];
          const nextAcc = this[ScanMixin_reducer](oldAcc, next);
          this[ScanMixin_acc] = nextAcc;

          this[LiftedListenerLike_notifyDelegate](nextAcc);
        },
      },
    ),
  );
})();

export const createListener: <T, TAcc>(
  delegate: ListenerLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ListenerLike<T> = /*@__PURE__*/ (<T, TAcc>() =>
  mixInstanceFactory(
    include(LiftedListenerMixin(), ScanMixin()),
    function ScanListener(
      this: unknown,
      delegate: ListenerLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ListenerLike<T> {
      init(LiftedListenerMixin<T, TAcc>(), this, delegate);
      init(ScanMixin<T, TAcc>(), this, reducer, initialValue);

      return this;
    },
  ))();

export const createSink: <T, TAcc>(
  delegate: SinkLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => SinkLike<T> = /*@__PURE__*/ (<T, TAcc>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), ScanMixin()),
    function ScanSink(
      this: unknown,
      delegate: SinkLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T, TAcc>(), this, delegate);
      init(ScanMixin<T, TAcc>(), this, reducer, initialValue);

      return this;
    },
  ))();

export const createConsumer: <T, TAcc>(
  delegate: ConsumerLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T, TAcc>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), ScanMixin()),
    function ScanConsumer(
      this: unknown,
      delegate: ConsumerLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T, TAcc>(), this, delegate);
      init(ScanMixin<T, TAcc>(), this, reducer, initialValue);

      return this;
    },
  ))();

export const createObserver: <T, TAcc>(
  delegate: ObserverLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), ScanMixin()),
    function ScanObserver(
      this: unknown,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T, TAcc>(), this, delegate, none);
      init(ScanMixin<T, TAcc>(), this, reducer, initialValue);

      return this;
    },
  ))();
