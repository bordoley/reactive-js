import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { ObservableLike_observe } from "../../../computations.js";
import { call, invoke, none, partial, pipe } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Queue from "../../../utils/Queue.js";
import {
  LiftedEventListenerLike_delegate,
  LiftedEventListenerLike_notify,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  CollectionEnumeratorLike_count,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  ObserverLike,
  QueueLike,
  QueueLike_enqueue,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import Observable_gen from "./Observable.gen.js";
import Observable_genWithSideEffects from "./Observable.genWithSideEffects.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const ObservableModule = {
  gen: Observable_gen,
  genWithSideEffects: Observable_genWithSideEffects,
};

const createTakeLastObserver: <T>(
  delegate: ObserverLike<T>,
  takeLastCount: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const TakeLastObserver_queue = Symbol("TakeLastObserver_queue");

  type TProperties = {
    [TakeLastObserver_queue]: QueueLike<T>;
  };

  function* notifyLast(this: TProperties) {
    const queue = this[TakeLastObserver_queue];
    while (queue[EnumeratorLike_moveNext]()) {
      yield queue[EnumeratorLike_current];
    }
  }

  return mixInstanceFactory(
    include(LiftedObserverMixin()),
    function TakeLastObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify> &
        TProperties,
      delegate: ObserverLike<T>,
      takeLastCount: number,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[TakeLastObserver_queue] = Queue.createDropOldest<T>(takeLastCount);

      return this;
    },
    props<TProperties>({
      [TakeLastObserver_queue]: none,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[TakeLastObserver_queue][QueueLike_enqueue](next);
      },
      [LiftedSinkLike_complete](this: TProperties & LiftedObserverLike<T>) {
        const count =
          this[TakeLastObserver_queue][CollectionEnumeratorLike_count];

        if (count === 0) {
          this[LiftedSinkLike_completeDelegate]();
        } else {
          pipe(
            call(notifyLast, this),
            Computation.fromIterable<Observable.Computation, T>(
              ObservableModule,
            ),
            invoke(
              ObservableLike_observe,
              this[LiftedEventListenerLike_delegate],
            ),
          );
        }
      },
    }),
  );
})();

const Observable_takeLast: Observable.Signature["takeLast"] = <T>(
  options: { readonly count?: number } = {},
) =>
  pipe(
    createTakeLastObserver<T>,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPureDeferred,
  );

export default Observable_takeLast;
