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
import { Pairwise } from "../../../containers.js";
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

const Observable_pairwise: Pairwise<ObservableLike>["pairwise"] =
  /*@__PURE__*/ (() => {
    const createPairwiseObserver: <T>(
      delegate: ObserverLike<readonly [T, T]>,
    ) => ObserverLike<T> = (<T>() => {
      const PairwiseSinkMixin_prev = Symbol("PairwiseSinkMixin_prev");
      const PairwiseSinkMixin_hasPrev = Symbol("PairwiseSinkMixin_hasPrev");

      type TProperties = {
        [PairwiseSinkMixin_prev]: T;
        [PairwiseSinkMixin_hasPrev]: boolean;
      };

      return createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), Observer_mixin<T>()),
          function PairwiseSinkMixin(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<readonly [T, T]>,
          ): ObserverLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(
              Observer_mixin<T>(),
              instance,
              delegate[ObserverLike_scheduler],
            );

            return instance;
          },
          props<TProperties>({
            [PairwiseSinkMixin_prev]: none,
            [PairwiseSinkMixin_hasPrev]: false,
          }),
          {
            [ObserverLike_notify](
              this: TProperties &
                DelegatingLike<ObserverLike<readonly [T, T]>> &
                ObserverLike<T>,
              next: T,
            ) {
              Observer_assertState(this);

              const prev = this[PairwiseSinkMixin_prev];

              if (this[PairwiseSinkMixin_hasPrev]) {
                this[DelegatingLike_delegate][ObserverLike_notify]([
                  prev,
                  next,
                ]);
              }

              this[PairwiseSinkMixin_hasPrev] = true;
              this[PairwiseSinkMixin_prev] = next;
            },
          },
        ),
      );
    })();

    return pipe(createPairwiseObserver, Observable_lift(true), returns);
  })();

export default Observable_pairwise;
