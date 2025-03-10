import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, tuple } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike, ObserverLike_notify } from "../../../utils.js";
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
    include(
      DelegatingDisposableMixin,
      ObserverMixin<T>(),
      LiftedObserverMixin(),
    ),
    function PairwiseObserver(
      this: unknown,
      delegate: ObserverLike<Tuple2<T, T>>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      return this;
    },
    props<TProperties<T>>({
      [PairwiseObserver_prev]: none,
      [PairwiseObserver_hasPrev]: false,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties<T> & LiftedObserverLike<T, Tuple2<T, T>>,
        next: T,
      ) {
        const prev = this[PairwiseObserver_prev];

        if (this[PairwiseObserver_hasPrev]) {
          this[LiftedObserverLike_delegate][ObserverLike_notify](
            tuple(prev, next),
          );
        }

        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;
      }),
    },
  ))();

const Observable_pairwise: Observable.Signature["pairwise"] = <T>() =>
  Observable_liftPureDeferred<T, Tuple2<T, T>>(createPairwiseObserver<T>);

export default Observable_pairwise;
