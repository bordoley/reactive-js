import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../concurrent.js";
import { Tuple2, none, tuple } from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
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
      DelegatingDisposableMixin<ObserverLike<Tuple2<T, T>>>(),
      ObserverMixin<T>(),
    ),
    function PairwiseObserver(
      instance: unknown,
      delegate: ObserverLike<Tuple2<T, T>>,
    ): ObserverLike<T> {
      init(
        DelegatingDisposableMixin<ObserverLike<Tuple2<T, T>>>(),
        instance,
        delegate,
      );

      init(ObserverMixin(), instance, delegate, delegate);

      return instance;
    },
    props<TProperties<T>>({
      [PairwiseObserver_prev]: none,
      [PairwiseObserver_hasPrev]: false,
    }),
    {
      [ObserverLike_notify](
        this: TProperties<T> &
          DelegatingDisposableLike<ObserverLike<Tuple2<T, T>>> &
          ObserverLike<T>,
        next: T,
      ) {
        Observer_assertObserverState(this);

        const prev = this[PairwiseObserver_prev];

        if (this[PairwiseObserver_hasPrev]) {
          this[DelegatingDisposableLike_delegate][ObserverLike_notify](
            tuple(prev, next),
          );
        }

        this[PairwiseObserver_hasPrev] = true;
        this[PairwiseObserver_prev] = next;
      },
    },
  ))();

const Observable_pairwise: Observable.Signature["pairwise"] = <T>() =>
  Observable_liftPureDeferred<T, Tuple2<T, T>>(createPairwiseObserver<T>);

export default Observable_pairwise;
