import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import {
  DisposableLike,
  QueueLike_count,
  QueueLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import IndexedQueue_toReadonlyArray from "../../../util/PullableQueue/__internal__/IndexedQueue.toReadonlyArray.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const Sink_takeLastMixin: <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly T[]) => C,
) => Mixin2<
  ObserverLike<T>,
  ObserverLike<T>,
  number,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly T[]) => C,
) => {
  const TakeLastSinkMixin_takeLastCount = Symbol(
    "TakeLastSinkMixin_takeLastCount",
  );

  type TProperties = {
    readonly [TakeLastSinkMixin_takeLastCount]: number;
  };

  return mix(
    include(
      Disposable_mixin,
      IndexedQueue_fifoQueueMixin(),
      Observer_mixin<T>(),
    ),
    function TakeLastSinkMixin(
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      takeLastCount: number,
    ): ObserverLike<T> {
      init(Disposable_mixin, instance);
      init(IndexedQueue_fifoQueueMixin<T>(), instance);
      init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

      instance[TakeLastSinkMixin_takeLastCount] = takeLastCount;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          pipe(
            instance,
            IndexedQueue_toReadonlyArray<T>(),
            fromReadonlyArray,
            Observable_observeWith(delegate),
          );
        }),
      );

      return instance;
    },
    props<TProperties>({
      [TakeLastSinkMixin_takeLastCount]: 0,
    }),
    {
      [ObserverLike_notify](
        this: TProperties & DisposableLike & PullableQueueLike<T>,
        next: T,
      ) {
        this[QueueLike_push](next);

        if (this[QueueLike_count] > this[TakeLastSinkMixin_takeLastCount]) {
          this[PullableQueueLike_pull]();
        }
      },
    },
  );
};

export default Sink_takeLastMixin;
