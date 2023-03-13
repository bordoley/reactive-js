import { max } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  IndexedQueueLike,
  QueueLike,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { none, partial, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike,
  QueueableLike_count,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import IndexedQueue_toReadonlyArray from "../../../util/Queue/__internal__/IndexedQueue.toReadonlyArray.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";

type ObservableTakeLast = <C extends ObservableLike, T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>;
const Observable_takeLast: ObservableTakeLast = /*@__PURE__*/ (<T>() => {
  const TakeLastObserverMixin_takeLastCount = Symbol(
    "TakeLastObserverMixin_takeLastCount",
  );

  const TakeLastObserverMixin_takeLastQueue = Symbol(
    "TakeLastObserverMixin_takeLastQueue",
  );

  type TProperties = {
    readonly [TakeLastObserverMixin_takeLastCount]: number;
    readonly [TakeLastObserverMixin_takeLastQueue]: IndexedQueueLike<T>;
  };

  const createTakeLastObserver = createInstanceFactory(
    mix(
      include(Disposable_mixin, Observer_mixin<T>()),
      function TakeLastObserverMixin(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        takeLastCount: number,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(
          Observer_mixin<T>(),
          instance,
          delegate[DispatcherLike_scheduler],
          delegate[QueueableLike_maxBufferSize],
        );

        instance[TakeLastObserverMixin_takeLastQueue] =
          IndexedQueue_createFifoQueue();
        instance[TakeLastObserverMixin_takeLastCount] = takeLastCount;

        pipe(
          instance,
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            pipe(
              instance[TakeLastObserverMixin_takeLastQueue],
              IndexedQueue_toReadonlyArray<T>(),
              ReadonlyArray_toObservable(),
              Observable_observeWith(delegate),
            );
          }),
        );

        return instance;
      },
      props<TProperties>({
        [TakeLastObserverMixin_takeLastCount]: 0,
        [TakeLastObserverMixin_takeLastQueue]: none,
      }),
      {
        [ObserverLike_notify](
          this: TProperties & DisposableLike & QueueLike<T>,
          next: T,
        ) {
          this[TakeLastObserverMixin_takeLastQueue][QueueableLike_push](next);

          if (
            this[TakeLastObserverMixin_takeLastQueue][QueueableLike_count] >
            this[TakeLastObserverMixin_takeLastCount]
          ) {
            this[TakeLastObserverMixin_takeLastQueue][QueueLike_pull]();
          }
        },
      },
    ),
  );

  return ((options: { readonly count?: number } = {}) => {
    const { count = 1 } = options;
    return pipe(
      createTakeLastObserver,
      partial(max(count, 0)),
      Observable_liftEnumerableOperator,
    );
  }) as ObservableTakeLast;
})();

export default Observable_takeLast;
