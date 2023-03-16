import { max } from "../../../__internal__/math.js";
import {
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  TakeFirstObserverMixin_count,
  TakeFirstObserverMixin_takeCount,
} from "../../../__internal__/symbols.js";
import { DelegatingDisposableLike } from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  QueueableLike_maxBufferSize,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

type ObservableTakeFirst = <C extends ObservableLike, T>(options?: {
  readonly count?: number;
}) => ContainerOperator<C, T, T>;
const Observable_takeFirst: ObservableTakeFirst = /*@__PURE__*/ (() => {
  const createTakeFirstObserver: <T>(
    delegate: ObserverLike<T>,
    count: number,
  ) => ObserverLike<T> = (<T>() => {
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
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_maxBufferSize],
          );

          instance[TakeFirstObserverMixin_takeCount] = takeCount;

          if (takeCount === 0) {
            instance[DisposableLike_dispose]();
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
              this[DisposableLike_dispose]();
            }
          },
        },
      ),
    );
  })();

  return ((options: { readonly count?: number } = {}) => {
    const { count = 1 } = options;
    return pipe(
      createTakeFirstObserver,
      partial(max(count, 0)),
      Observable_liftEnumerableOperator,
    );
  }) as ObservableTakeFirst;
})();

export default Observable_takeFirst;
