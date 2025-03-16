import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, tuple } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

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
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify>,
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
      [LiftedEventListenerLike_notify](
        this: TProperties<T> & LiftedObserverLike<T, Tuple2<T, T>>,
        next: T,
      ) {
        const prev = this[PairwiseObserver_prev];
        const hasPrev = this[PairwiseObserver_hasPrev];

        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;

        if (hasPrev) {
          const pair = tuple(prev, next);
          this[LiftedEventListenerLike_notifyDelegate](pair);
        }
      },
    },
  ))();

const Observable_pairwise: Observable.Signature["pairwise"] = <T>() =>
  Observable_liftPureDeferred<T, Tuple2<T, T>>(createPairwiseObserver<T>);

export default Observable_pairwise;
