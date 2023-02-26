import {
  Mixin3,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Factory, Reducer, error, none, pipe } from "../../../functions.js";
import {
  ReactiveContainerLike,
  SinkLike,
  SinkLike_notify,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";

const Sink_reduceMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<TAcc>,
  T,
  TAcc,
>(
  fromReadonlyArray: (v: readonly TAcc[]) => C,
) => Mixin3<
  SinkLike<T>,
  TSink,
  Reducer<T, TAcc>,
  Factory<TAcc>,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<TAcc>,
  T,
  TAcc,
>(
  fromReadonlyArray: (v: readonly TAcc[]) => C,
) => {
  const ReduceSinkMixin_reducer = Symbol("ReduceSinkMixin_reducer");
  const ReduceSinkMixin_acc = Symbol("ReduceSinkMixin_acc");

  type TProperties = {
    readonly [ReduceSinkMixin_reducer]: Reducer<T, TAcc>;
    [ReduceSinkMixin_acc]: TAcc;
  };

  return mix(
    include(Disposable_mixin),
    function ReduceSinkMixin(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): SinkLike<T> {
      init(Disposable_mixin, instance);

      instance[ReduceSinkMixin_reducer] = reducer;

      try {
        const acc = initialValue();
        instance[ReduceSinkMixin_acc] = acc;
      } catch (e) {
        pipe(instance, Disposable_dispose(error(e)));
      }

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          pipe(
            [instance[ReduceSinkMixin_acc]],
            fromReadonlyArray,
            ReactiveContainer_sinkInto<C, TSink, TAcc>(delegate),
          );
        }),
      );

      return instance;
    },
    props<TProperties>({
      [ReduceSinkMixin_reducer]: none,
      [ReduceSinkMixin_acc]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: T) {
        const nextAcc = this[ReduceSinkMixin_reducer](
          this[ReduceSinkMixin_acc],
          next,
        );
        this[ReduceSinkMixin_acc] = nextAcc;
      },
    },
  );
};

export default Sink_reduceMixin;
