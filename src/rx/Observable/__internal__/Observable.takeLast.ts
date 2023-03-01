import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeLast } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { partial, pipe } from "../../../functions.js";
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
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";

const Observable_takeLast: TakeLast<ObservableLike>["takeLast"] =
  /*@__PURE__*/ (<T>() => {
    const TakeLastObserverMixin_takeLastCount = Symbol(
      "TakeLastObserverMixin_takeLastCount",
    );

    type TProperties = {
      readonly [TakeLastObserverMixin_takeLastCount]: number;
    };

    const createTakeLastObserver = createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
          IndexedQueue_fifoQueueMixin(),
          Observer_mixin<T>(),
        ),
        function TakeLastObserverMixin(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          takeLastCount: number,
        ): ObserverLike<T> {
          init(Disposable_mixin, instance);
          init(IndexedQueue_fifoQueueMixin<T>(), instance);
          init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

          instance[TakeLastObserverMixin_takeLastCount] = takeLastCount;

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              pipe(
                instance,
                IndexedQueue_toReadonlyArray<T>(),
                ReadonlyArray_toRunnable(),
                Observable_observeWith(delegate),
              );
            }),
          );

          return instance;
        },
        props<TProperties>({
          [TakeLastObserverMixin_takeLastCount]: 0,
        }),
        {
          [ObserverLike_notify](
            this: TProperties & DisposableLike & PullableQueueLike<T>,
            next: T,
          ) {
            this[QueueLike_push](next);

            if (
              this[QueueLike_count] > this[TakeLastObserverMixin_takeLastCount]
            ) {
              this[PullableQueueLike_pull]();
            }
          },
        },
      ),
    );

    return (options: { readonly count?: number } = {}) => {
      const { count = 1 } = options;
      return pipe(
        createTakeLastObserver,
        partial(count),
        Observable_liftEnumerableOperator,
      );
    };
  })();

export default Observable_takeLast;
