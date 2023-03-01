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
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const Sink_reduceMixin: <C extends ObservableLike, T, TAcc>(
  fromReadonlyArray: (v: readonly TAcc[]) => C,
) => Mixin3<
  ObserverLike<T>,
  ObserverLike<TAcc>,
  Reducer<T, TAcc>,
  Factory<TAcc>,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <C extends ObservableLike, T, TAcc>(
  fromReadonlyArray: (v: readonly TAcc[]) => C,
) => {
  const ReduceSinkMixin_reducer = Symbol("ReduceSinkMixin_reducer");
  const ReduceSinkMixin_acc = Symbol("ReduceSinkMixin_acc");

  type TProperties = {
    readonly [ReduceSinkMixin_reducer]: Reducer<T, TAcc>;
    [ReduceSinkMixin_acc]: TAcc;
  };

  return mix(
    include(Disposable_mixin, Observer_mixin<T>()),
    function ReduceSinkMixin(
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): ObserverLike<T> {
      init(Disposable_mixin, instance);
      init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

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
            Observable_observeWith<C, TAcc>(delegate),
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
      [ObserverLike_notify](this: TProperties, next: T) {
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
