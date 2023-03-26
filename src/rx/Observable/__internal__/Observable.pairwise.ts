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
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { QueueableLike_maxBufferSize } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

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
        include(Disposable_delegatingMixin(), Observer_mixin<T>()),
        function PairwiseObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<readonly [T, T]>,
        ): ObserverLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(
            Observer_mixin<T>(),
            instance,
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_maxBufferSize],
          );

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
    Observable_liftEnumerableOperator,
    returns,
  ) as ObservablePairwise;
})();

export default Observable_pairwise;
