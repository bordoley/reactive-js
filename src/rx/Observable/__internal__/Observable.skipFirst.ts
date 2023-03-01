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
import { SkipFirst } from "../../../containers.js";
import StatefulContainer_skipFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_skipFirst: SkipFirst<ObservableLike>["skipFirst"] =
  /*@__PURE__*/ (() => {
    const createSkipFirstObserver: <T>(
      delegate: ObserverLike<T>,
      count: number,
    ) => ObserverLike<T> = (<T>() => {
      const SkipFirstSinkMixin_skipCount = Symbol(
        "SkipFirstSinkMixin_skipCount",
      );
      const SkipFirstSinkMixin_count = Symbol("SkipFirstSinkMixin_count");

      type TProperties = {
        readonly [SkipFirstSinkMixin_skipCount]: number;
        [SkipFirstSinkMixin_count]: number;
      };

      return createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), Observer_mixin<T>()),
          function SkipFirstSinkMixin(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
              Mutable<TProperties>,
            delegate: ObserverLike<T>,
            skipCount: number,
          ): ObserverLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(
              Observer_mixin<T>(),
              instance,
              delegate[ObserverLike_scheduler],
            );

            instance[SkipFirstSinkMixin_skipCount] = skipCount;

            return instance;
          },
          props<TProperties>({
            [SkipFirstSinkMixin_skipCount]: 0,
            [SkipFirstSinkMixin_count]: 0,
          }),
          {
            [ObserverLike_notify](
              this: TProperties &
                DelegatingLike<ObserverLike<T>> &
                ObserverLike<T>,
              next: T,
            ) {
              Observer_assertState(this);

              this[SkipFirstSinkMixin_count]++;
              if (
                this[SkipFirstSinkMixin_count] >
                this[SkipFirstSinkMixin_skipCount]
              ) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
              }
            },
          },
        ),
      );
    })();

    return pipe(
      createSkipFirstObserver,
      StatefulContainer_skipFirst(Observable_liftEnumerableOperator),
    );
  })();

export default Observable_skipFirst;
