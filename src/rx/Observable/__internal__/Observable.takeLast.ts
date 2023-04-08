import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __TakeLastObserver_takeLastQueue } from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike,
} from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import { invoke, none, partial, pipe } from "../../../functions.js";
import ReadonlyArray_toObservable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { DisposableLike, QueueableLike_enqueue } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Indexed_toReadonlyArray from "../../../util/Indexed/__internal__/Indexed.toReadonlyArray.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

type ObservableTakeLast = <C extends ObservableLike, T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>;
const Observable_takeLast: ObservableTakeLast = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__TakeLastObserver_takeLastQueue]: IndexedQueueLike<T>;
  };

  const createTakeLastObserver = createInstanceFactory(
    mix(
      include(Observer_mixin()),
      function TakeLastObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        takeLastCount: number,
      ): ObserverLike<T> {
        init(Observer_mixin(), instance, delegate, delegate);

        instance[__TakeLastObserver_takeLastQueue] =
          IndexedQueue_createFifoQueue(takeLastCount, "drop-oldest");

        pipe(
          instance,
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            pipe(
              instance[__TakeLastObserver_takeLastQueue],
              Indexed_toReadonlyArray<T>(),
              ReadonlyArray_toObservable(),
              invoke(ObservableLike_observe, delegate),
            );
          }),
        );

        return instance;
      },
      props<TProperties>({
        [__TakeLastObserver_takeLastQueue]: none,
      }),
      {
        [ObserverLike_notify](
          this: TProperties & DisposableLike & QueueLike<T>,
          next: T,
        ) {
          this[__TakeLastObserver_takeLastQueue][
            QueueableLike_enqueue
          ](next);
        },
      },
    ),
  );

  return ((options: { readonly count?: number } = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return pipe(createTakeLastObserver, partial(count), Enumerable_lift);
  }) as ObservableTakeLast;
})();

export default Observable_takeLast;
