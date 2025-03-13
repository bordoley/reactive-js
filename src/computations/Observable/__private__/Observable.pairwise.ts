import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, tuple } from "../../../functions.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ObserverLike,
  QueueableLike_enqueue,
  QueueableLike_isReady,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";

const PairwiseObserver_hasPrev = Symbol("PairwiseObserver_hasPrev");
const PairwiseObserver_prev = Symbol("PairwiseObserver_prev");

interface TProperties<T> {
  [PairwiseObserver_hasPrev]: boolean;
  [PairwiseObserver_prev]: T;
}

const createPairwiseObserver: <T>(
  delegate: ObserverLike<Tuple2<T, T>>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function PairwiseObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify>,
      delegate: ObserverLike<Tuple2<T, T>>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T, Tuple2<T, T>>(), this, delegate, none);

      return this;
    },
    props<TProperties<T>>({
      [PairwiseObserver_prev]: none,
      [PairwiseObserver_hasPrev]: false,
    }),
    {
      [LiftedObserverLike_notify](
        this: TProperties<T> & LiftedObserverLike<T, Tuple2<T, T>>,
        next: T,
      ) {
        const delegate = this[LiftedObserverLike_delegate];
        const prev = this[PairwiseObserver_prev];
        const hasPrev = this[PairwiseObserver_hasPrev];

        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;

        let pair = none as unknown as Tuple2<T, T>;
        return (
          (hasPrev &&
            ((pair = tuple(prev, next)),
            delegate?.[LiftedObserverLike_notify]?.(pair) ??
              delegate[QueueableLike_enqueue](pair))) ||
          delegate[QueueableLike_isReady]
        );
      },
    },
  ))();

const Observable_pairwise: Observable.Signature["pairwise"] = <T>() =>
  Observable_liftPureDeferred<T, Tuple2<T, T>>(createPairwiseObserver<T>);

export default Observable_pairwise;
