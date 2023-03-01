import {
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeFirst } from "../../../containers.js";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import { DelegatingDisposableLike } from "../../../util/__internal__/util.internal.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeFirst: TakeFirst<ObservableLike>["takeFirst"] =
  /*@__PURE__*/ (() => {
    const createTakeFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const TakeFirstObserverMixin_takeCount = Symbol(
        "TakeFirstObserverMixin_takeCount",
      );
      const TakeFirstObserverMixin_count = Symbol(
        "TakeFirstObserverMixin_count",
      );

      type TProperties = {
        readonly [TakeFirstObserverMixin_takeCount]: number;
        [TakeFirstObserverMixin_count]: number;
      };

      return createInstanceFactory(
        mix(
          include(
            Disposable_delegatingMixin<ObserverLike<T>>(),
            Observer_mixin<T>(),
          ),
          function TakeFirstObserverMixin(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            takeCount: number,
          ): ObserverLike<T> {
            init(
              Disposable_delegatingMixin<ObserverLike<T>>(),
              instance,
              delegate,
            );
            init(
              Observer_mixin<T>(),
              instance,
              delegate[ObserverLike_scheduler],
            );

            instance[TakeFirstObserverMixin_takeCount] = takeCount;

            if (takeCount === 0) {
              pipe(instance, Disposable_dispose());
            }

            return instance;
          },
          props<TProperties>({
            [TakeFirstObserverMixin_count]: 0,
            [TakeFirstObserverMixin_takeCount]: 0,
          }),
          {
            [ObserverLike_notify](
              this: TProperties &
                DelegatingDisposableLike<ObserverLike<T>> &
                ObserverLike<T>,
              next: T,
            ) {
              Observer_assertState(this);

              this[TakeFirstObserverMixin_count]++;
              this[DelegatingLike_delegate][ObserverLike_notify](next);
              if (
                this[TakeFirstObserverMixin_count] >=
                this[TakeFirstObserverMixin_takeCount]
              ) {
                pipe(this, Disposable_dispose());
              }
            },
          },
        ),
      );
    })();

    return pipe(
      createTakeFirstObserver,
      StatefulContainer_takeFirst(Observable_liftEnumerableOperator),
    );
  })();

export default Observable_takeFirst;
