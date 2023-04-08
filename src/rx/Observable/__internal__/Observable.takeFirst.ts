import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  DelegatingLike,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike_delegate,
  TakeFirstObserver_count,
  TakeFirstObserver_takeCount,
} from "../../../__internal__/symbols.js";
import { ContainerOperator } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservableTakeFirst = <C extends ObservableLike, T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>;
const Observable_takeFirst: ObservableTakeFirst = /*@__PURE__*/ (() => {
  const createTakeFirstObserver: <T>(
    delegate: ObserverLike<T>,
    count: number,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly [TakeFirstObserver_takeCount]: number;
      [TakeFirstObserver_count]: number;
    };

    return createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), delegatingMixin()),
        function TakeFirstObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          takeCount: number,
        ): ObserverLike<T> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(delegatingMixin(), instance, delegate);
          instance[TakeFirstObserver_takeCount] = takeCount;

          if (takeCount === 0) {
            instance[DisposableLike_dispose]();
          }

          return instance;
        },
        props<TProperties>({
          [TakeFirstObserver_count]: 0,
          [TakeFirstObserver_takeCount]: 0,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            this[TakeFirstObserver_count]++;
            this[DelegatingLike_delegate][ObserverLike_notify](next);
            if (
              this[TakeFirstObserver_count] >= this[TakeFirstObserver_takeCount]
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
