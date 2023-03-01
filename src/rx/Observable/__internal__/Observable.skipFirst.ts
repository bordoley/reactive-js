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
import { partial, pipe } from "../../../functions.js";
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
      const SkipFirstObserverMixin_skipCount = Symbol(
        "SkipFirstObserverMixin_skipCount",
      );
      const SkipFirstObserverMixin_count = Symbol(
        "SkipFirstObserverMixin_count",
      );

      type TProperties = {
        readonly [SkipFirstObserverMixin_skipCount]: number;
        [SkipFirstObserverMixin_count]: number;
      };

      return createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), Observer_mixin<T>()),
          function SkipFirstObserverMixin(
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

            instance[SkipFirstObserverMixin_skipCount] = skipCount;

            return instance;
          },
          props<TProperties>({
            [SkipFirstObserverMixin_skipCount]: 0,
            [SkipFirstObserverMixin_count]: 0,
          }),
          {
            [ObserverLike_notify](
              this: TProperties &
                DelegatingLike<ObserverLike<T>> &
                ObserverLike<T>,
              next: T,
            ) {
              Observer_assertState(this);

              this[SkipFirstObserverMixin_count]++;
              if (
                this[SkipFirstObserverMixin_count] >
                this[SkipFirstObserverMixin_skipCount]
              ) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
              }
            },
          },
        ),
      );
    })();

    return (options: { readonly count?: number } = {}) => {
      const { count = 1 } = options;
      const lifted = pipe(
        createSkipFirstObserver,
        partial(count),
        Observable_liftEnumerableOperator,
      );
      return obs => (count > 0 ? pipe(obs, lifted) : obs);
    };
  })();

export default Observable_skipFirst;
