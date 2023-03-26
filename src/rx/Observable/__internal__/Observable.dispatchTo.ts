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
import { ContainerOperator } from "../../../containers.js";
import {
  Function1,
  bindMethod,
  isFunction,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { SchedulerLike_requestYield } from "../../../scheduling.js";
import {
  QueueableLike,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

type ObservableDispatchTo = <C extends ObservableLike, T = unknown>(
  effect: QueueableLike<T> | Function1<T, boolean>,
) => ContainerOperator<C, T, T>;
const Observable_dispatchTo: ObservableDispatchTo = /*@__PURE__*/ (<T>() => {
  const createDispatchToObserver: <T>(
    delegate: ObserverLike<T>,
    effect: Function1<T, boolean>,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly d: Function1<T, boolean>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Observer_mixin<T>()),
        function DispatchToObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          effect: Function1<T, boolean>,
        ): ObserverLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(
            Observer_mixin<T>(),
            instance,
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_maxBufferSize],
          );

          instance.d = effect;

          return instance;
        },
        props<TProperties>({
          d: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            if (!this.d(next)) {
              this[DispatcherLike_scheduler][SchedulerLike_requestYield]();
            }
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          },
        },
      ),
    );
  })();

  return ((push: QueueableLike<T> | Function1<T, boolean>) => {
    const effect = isFunction(push)
      ? push
      : bindMethod(push, QueueableLike_push);
    return pipe(
      createDispatchToObserver,
      partial(effect),
      Observable_liftEnumerableOperator,
    );
  }) as ObservableDispatchTo;
})();

export default Observable_dispatchTo;
