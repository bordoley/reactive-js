import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import IndexedCollection_toObservable from "../../IndexedCollection/__internal__/IndexedCollection.toObservable.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  QueueLike,
  TakeLastLike,
  TakeLastLike_queue,
} from "../../__internal__/types.js";
import { invoke, none, pipe } from "../../functions.js";
import {
  DisposableLike,
  ObservableLike_observe,
  ObserverLike,
  QueueableLike_enqueue,
  SinkLike_notify,
} from "../../types.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createTakeLastObserver = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Disposable_mixin, Observer_mixin()),
      function TakeLastObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          TakeLastLike<T>,
        delegate: ObserverLike<T>,
        takeLastCount: number,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
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
