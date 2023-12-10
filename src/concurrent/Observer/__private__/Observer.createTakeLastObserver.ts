import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObservableLike_observe, ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { invoke, none, pipe } from "../../../functions.js";
import {
  DisposableLike,
  IndexedQueueLike,
  QueueLike,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observable_fromIterable from "../../Observable/__private__/Observable.fromIterable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";

const Observer_createTakeLastObserver = /*@__PURE__*/ (<T>() => {
  const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");

  type TProperties = {
    [TakeLastObserver_queue]: IndexedQueueLike<T>;
  };

  return createInstanceFactory(
    mix(
      include(DisposableMixin, ObserverMixin()),
      function TakeLastObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> & TProperties,
        delegate: ObserverLike<T>,
        takeLastCount: number,
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);

        instance[TakeLastObserver_queue] = IndexedQueue.create(
          takeLastCount,
          "drop-oldest",
        );

        pipe(
          instance,
          Disposable.onComplete(() => {
            pipe(
              instance[TakeLastObserver_queue],
              Observable_fromIterable(),
              invoke(ObservableLike_observe, delegate),
            );
          }),
        );

        return instance;
      },
      props<TProperties>({
        [TakeLastObserver_queue]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DisposableLike & QueueLike<T>,
          next: T,
        ) {
          this[TakeLastObserver_queue][QueueableLike_enqueue](next);
        },
      },
    ),
  );
})();

export default Observer_createTakeLastObserver;
