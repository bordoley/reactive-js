import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import IndexedCollection_toReadonlyArray from "../../IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __TakeLastObserver_takeLastQueue } from "../../__internal__/symbols.js";
import { IndexedQueueLike, QueueLike } from "../../__internal__/types.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { invoke, none, partial, pipe } from "../../functions.js";
import {
  DisposableLike,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
  QueueableLike_enqueue,
} from "../../types.js";

type ObservableTakeLast = <C extends ObservableContainer.Type, T>(options?: {
  readonly count?: number;
}) => Containers.Operator<C, T, T>;
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
        Observer_mixin_initFromDelegate(instance, delegate);

        instance[__TakeLastObserver_takeLastQueue] = Queue_createIndexedQueue(
          takeLastCount,
          "drop-oldest",
        );

        pipe(
          instance,
          Disposable_onComplete(() => {
            pipe(
              instance[__TakeLastObserver_takeLastQueue],
              IndexedCollection_toReadonlyArray<T>(),
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
          this[__TakeLastObserver_takeLastQueue][QueueableLike_enqueue](next);
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
