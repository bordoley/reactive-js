import { clampPositiveInteger } from "../../../__internal__/math.js";
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
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  SkipFirstObserver_count,
  SkipFirstObserver_skipCount,
} from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Observable_lift from "./Observable.lift.js";

type ObservableSkipFirst = <C extends ObservableLike, T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>;

const Observable_skipFirst: ObservableSkipFirst = /*@__PURE__*/ (() => {
  const createSkipFirstObserver: <T>(
    delegate: ObserverLike<T>,
    count: number,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly [SkipFirstObserver_skipCount]: number;
      [SkipFirstObserver_count]: number;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin()),
        function SkipFirstObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          skipCount: number,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          instance[SkipFirstObserver_skipCount] = skipCount;

          return instance;
        },
        props<TProperties>({
          [SkipFirstObserver_skipCount]: 0,
          [SkipFirstObserver_count]: 0,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            this[SkipFirstObserver_count]++;
            if (
              this[SkipFirstObserver_count] > this[SkipFirstObserver_skipCount]
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
