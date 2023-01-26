import {
  Mixin3,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Factory, Reducer, error, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import ReactiveContainer$sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink$reduceMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<TAcc>,
  T,
  TAcc,
>(
  fromArray: (v: readonly TAcc[]) => C,
) => Mixin3<SinkLike<T>, TSink, Reducer<T, TAcc>, Factory<TAcc>> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<TAcc>,
  T,
  TAcc,
>(
  fromArray: (v: readonly TAcc[]) => C,
) => {
  const ReduceSink_private_reducer = Symbol("ReduceSink_private_reducer");
  const ReduceSink_private_acc = Symbol("ReduceSink_private_acc");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: TSink;
    readonly [ReduceSink_private_reducer]: Reducer<T, TAcc>;
    [ReduceSink_private_acc]: TAcc;
  };

  return mix(
    include(Disposable$mixin),
    function ReduceSink(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): SinkLike<T> {
      init(Disposable$mixin, instance);

      instance[DelegatingSinkLike_delegate] = delegate;
      instance[ReduceSink_private_reducer] = reducer;

      try {
        const acc = initialValue();
        instance[ReduceSink_private_acc] = acc;
      } catch (e) {
        pipe(instance, Disposable$dispose(error(e)));
      }

      pipe(
        instance,
        Disposable$addTo(delegate),
        Disposable$onComplete(() => {
          pipe(
            [instance[ReduceSink_private_acc]],
            fromArray,
            ReactiveContainer$sinkInto<C, TSink, TAcc>(delegate),
          );
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DelegatingSinkLike_delegate]: none,
      [ReduceSink_private_reducer]: none,
      [ReduceSink_private_acc]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: T) {
        const nextAcc = this[ReduceSink_private_reducer](
          this[ReduceSink_private_acc],
          next,
        );
        this[ReduceSink_private_acc] = nextAcc;
      },
    },
  );
};

export default Sink$reduceMixin;
