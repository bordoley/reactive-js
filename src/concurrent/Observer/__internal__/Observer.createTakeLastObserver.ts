import {
  createInstanceFactory,
  mix,
  include,
  init,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObservableLike_observe } from "../../../concurrent.js";
import { pipe, invoke, none } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import {
  DisposableLike,
  QueueLike,
  QueueableLike_enqueue,
} from "../../../utils.js";
import Disposable_onComplete from "../../../utils/Disposable/__internal__/Disposable.onComplete.js";
import Queue_createIndexedQueue from "../../../utils/Queue/__internal__/Queue.createIndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";

const Observer_createTakeLastObserver = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(DisposableMixin, ObserverMixin()),
      function TakeLastObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          TakeLastLike<T>,
        delegate: ObserverLike<T>,
        takeLastCount: number,
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);

        instance[TakeLastLike_queue] = Queue_createIndexedQueue(
          takeLastCount,
          "drop-oldest",
        );

        pipe(
          instance,
          Disposable_onComplete(() => {
            pipe(
              instance[TakeLastLike_queue],
              IndexedCollection_toObservable(),
              invoke(ObservableLike_observe, delegate),
            );
          }),
        );

        return instance;
      },
      props<TakeLastLike<T>>({
        [TakeLastLike_queue]: none,
      }),
      {
        [SinkLike_notify](
          this: TakeLastLike<T> & DisposableLike & QueueLike<T>,
          next: T,
        ) {
          this[TakeLastLike_queue][QueueableLike_enqueue](next);
        },
      },
    ),
  ))();

export default Observer_createTakeLastObserver;
