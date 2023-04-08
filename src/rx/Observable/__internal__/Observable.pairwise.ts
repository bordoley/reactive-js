import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  PairwiseObserver_hasPrev,
  PairwiseObserver_prev,
} from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { none, pipe, returns } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservablePairwise = <C extends ObservableLike, T>() => ContainerOperator<
  C,
  T,
  readonly [T, T]
>;
const Observable_pairwise: ObservablePairwise = /*@__PURE__*/ (() => {
  const createPairwiseObserver: <T>(
    delegate: ObserverLike<readonly [T, T]>,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      [PairwiseObserver_prev]: T;
      [PairwiseObserver_hasPrev]: boolean;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin<T>()),
        function PairwiseObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<readonly [T, T]>,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);

          return instance;
        },
        props<TProperties>({
          [PairwiseObserver_prev]: none,
          [PairwiseObserver_hasPrev]: false,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<readonly [T, T]>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const prev = this[PairwiseObserver_prev];

            if (this[PairwiseObserver_hasPrev]) {
              this[DelegatingLike_delegate][ObserverLike_notify]([prev, next]);
            }

            this[PairwiseObserver_hasPrev] = true;
            this[PairwiseObserver_prev] = next;
          },
        },
      ),
    );
  })();

  return pipe(
    createPairwiseObserver,
    Enumerable_lift,
    returns,
  ) as ObservablePairwise;
})();

export default Observable_pairwise;
