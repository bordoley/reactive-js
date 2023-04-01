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
import { EnqueueObserver_effect } from "../../../__internal__/symbols.js";
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
import { QueueableLike, QueueableLike_enqueue } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, {
  initObserverMixinFromDelegate,
} from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";

type ObservableEnqueue = <C extends ObservableLike, T = unknown>(
  queue: QueueableLike<T> | Function1<T, boolean>,
) => ContainerOperator<C, T, T>;
const Observable_enqueue: ObservableEnqueue = /*@__PURE__*/ (<T>() => {
  const createEnqueueObserver: <T>(
    delegate: ObserverLike<T>,
    effect: Function1<T, boolean>,
  ) => ObserverLike<T> = (<T>() => {
    type TProperties = {
      readonly [EnqueueObserver_effect]: Function1<T, boolean>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Observer_mixin<T>()),
        function EnqueueObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          effect: Function1<T, boolean>,
        ): ObserverLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          initObserverMixinFromDelegate(instance, delegate);

          instance[EnqueueObserver_effect] = effect;

          return instance;
        },
        props<TProperties>({
          [EnqueueObserver_effect]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              DelegatingLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);

            if (!this[EnqueueObserver_effect](next)) {
              this[DispatcherLike_scheduler][SchedulerLike_requestYield]();
            }
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          },
        },
      ),
    );
  })();

  return ((queue: QueueableLike<T> | Function1<T, boolean>) => {
    const effect = isFunction(queue)
      ? queue
      : bindMethod(queue, QueueableLike_enqueue);
    return pipe(
      createEnqueueObserver,
      partial(effect),
      Observable_liftEnumerableOperator,
    );
  }) as ObservableEnqueue;
})();

export default Observable_enqueue;
