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
import { ContainerOperator } from "../../../containers.js";
import { none, pipe, returns } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_lift from "./Observable.lift.js";

type ObservablePairwise = <C extends ObservableLike, T>() => ContainerOperator<
  C,
  T,
  readonly [T, T]
>;
const Observable_pairwise: ObservablePairwise = /*@__PURE__*/ (() => {
  const createPairwiseObserver: <T>(
    delegate: ObserverLike<readonly [T, T]>,
  ) => ObserverLike<T> = (<T>() => {
    const PairwiseObserverMixin_prev = Symbol("PairwiseObserverMixin_prev");
    const PairwiseObserverMixin_hasPrev = Symbol(
      "PairwiseObserverMixin_hasPrev",
    );

    type TProperties = {
      [PairwiseObserverMixin_prev]: T;
      [PairwiseObserverMixin_hasPrev]: boolean;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Observer_mixin<T>()),
        function PairwiseObserverMixin(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<readonly [T, T]>,
        ): ObserverLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

          return instance;
        },
        props<TProperties>({
          [PairwiseObserverMixin_prev]: none,
          [PairwiseObserverMixin_hasPrev]: false,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<readonly [T, T]>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            const prev = this[PairwiseObserverMixin_prev];

            if (this[PairwiseObserverMixin_hasPrev]) {
              this[DelegatingLike_delegate][ObserverLike_notify]([prev, next]);
            }

            this[PairwiseObserverMixin_hasPrev] = true;
            this[PairwiseObserverMixin_prev] = next;
          },
        },
      ),
    );
  })();

  return pipe(
    createPairwiseObserver,
    Observable_lift(true),
    returns,
  ) as ObservablePairwise;
})();

export default Observable_pairwise;
