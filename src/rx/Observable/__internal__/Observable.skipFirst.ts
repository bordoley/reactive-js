import { max } from "../../../__internal__/math.js";
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
  SkipFirstObserverMixin_count,
  SkipFirstObserverMixin_skipCount,
} from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
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

type ObservableSkipFirst = <C extends ObservableLike, T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>;

const Observable_skipFirst: ObservableSkipFirst = /*@__PURE__*/ (() => {
  const createSkipFirstObserver: <T>(
    delegate: ObserverLike<T>,
    count: number,
  ) => ObserverLike<T> = (<T>() => {
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
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_maxBufferSize],
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

  return ((options: { readonly count?: number } = {}) => {
    const { count = 1 } = options;
    const op = pipe(
      createSkipFirstObserver,
      partial(max(count, 0)),
      Observable_liftEnumerableOperator,
    );
    return obs => (count > 0 ? op(obs) : obs);
  }) as ObservableSkipFirst;
})();

export default Observable_skipFirst;
