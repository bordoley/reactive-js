import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObservableLike_observe, ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { invoke, none, partial, pipe } from "../../../functions.js";
import {
  DisposableLike,
  IndexedQueueLike,
  QueueLike,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observer_mixin_initFromDelegate from "../../Observer/__private__/Observer.mixin.initFromDelegate.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
import Observable_liftPure from "./Observable.liftPure.js";

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

const Observable_takeLast: Observable.Signature["takeLast"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createTakeLastObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPure,
  );

export default Observable_takeLast;
