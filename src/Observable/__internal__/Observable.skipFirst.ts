import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __SkipFirstObserver_count,
  __SkipFirstObserver_skipCount,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { partial, pipe } from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../types.js";
import Observable_lift from "./Observable.lift.js";

type ObservableSkipFirst = <C extends ObservableContainer.Type, T>(options?: {
  readonly count?: number;
}) => Containers.Operator<C, T, T>;

const Observable_skipFirst: ObservableSkipFirst = /*@__PURE__*/ (() => {
  const createSkipFirstObserver: <T>(
    delegate: ObserverLike<T>,
    count: number,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly [__SkipFirstObserver_skipCount]: number;
      [__SkipFirstObserver_count]: number;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), Delegating_mixin()),
        function SkipFirstObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          skipCount: number,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(Delegating_mixin(), instance, delegate);
          instance[__SkipFirstObserver_skipCount] = skipCount;

          return instance;
        },
        props<TProperties>({
          [__SkipFirstObserver_skipCount]: 0,
          [__SkipFirstObserver_count]: 0,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            this[__SkipFirstObserver_count]++;
            if (
              this[__SkipFirstObserver_count] >
              this[__SkipFirstObserver_skipCount]
            ) {
              this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
          },
        },
      ),
    );
  })();

  return ((options: { readonly count?: number } = {}) => {
    const count = clampPositiveInteger(options?.count ?? 1);
    const op = pipe(
      createSkipFirstObserver,
      partial(count),
      Observable_lift<ObservableLike>({
        [ObservableLike_isEnumerable]: true,
        [ObservableLike_isRunnable]: true,
      }),
    );
    return (obs: ObservableLike) => (count > 0 ? op(obs) : obs);
  }) as ObservableSkipFirst;
})();

export default Observable_skipFirst;
