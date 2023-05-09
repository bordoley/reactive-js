import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
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
  __TakeFirstObserver_count,
  __TakeFirstObserver_takeCount,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Container, ObservableContainer } from "../../containers.js";
import { partial, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  ObserverLike_notify,
} from "../../types.js";

type ObservableTakeFirst = <C extends ObservableContainer.Type, T>(options?: {
  readonly count?: number;
}) => Container.Operator<C, T, T>;
const Observable_takeFirst: ObservableTakeFirst = /*@__PURE__*/ (() => {
  const createTakeFirstObserver: <T>(
    delegate: ObserverLike<T>,
    count: number,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly [__TakeFirstObserver_takeCount]: number;
      [__TakeFirstObserver_count]: number;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), Delegating_mixin()),
        function TakeFirstObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          takeCount: number,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(Delegating_mixin(), instance, delegate);
          instance[__TakeFirstObserver_takeCount] = takeCount;

          if (takeCount === 0) {
            instance[DisposableLike_dispose]();
          }

          return instance;
        },
        props<TProperties>({
          [__TakeFirstObserver_count]: 0,
          [__TakeFirstObserver_takeCount]: 0,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            this[__TakeFirstObserver_count]++;
            this[DelegatingLike_delegate][ObserverLike_notify](next);
            if (
              this[__TakeFirstObserver_count] >=
              this[__TakeFirstObserver_takeCount]
            ) {
              this[DisposableLike_dispose]();
            }
          },
        },
      ),
    );
  })();

  return ((options: { readonly count?: number } = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return pipe(createTakeFirstObserver, partial(count), Enumerable_lift);
  }) as ObservableTakeFirst;
})();

export default Observable_takeFirst;
