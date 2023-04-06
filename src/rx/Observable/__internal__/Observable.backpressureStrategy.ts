import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

type ObservableBackpressureStrategy = <C extends ObservableLike, T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => ContainerOperator<C, T, T>;

const Observable_backpressureStrategy: ObservableBackpressureStrategy =
  /*@__PURE__*/ (<T>() => {
    const createBackpressureObserver: (
      delegate: ObserverLike<T>,
      capacity: number,
      backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
    ) => ObserverLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin(), Observer_mixin<T>()),
          function EnqueueObserver(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify>,
            delegate: ObserverLike<T>,
            capacity: number,
            backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
          ): ObserverLike<T> {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(
              Observer_mixin<T>(),
              instance,
              delegate[DispatcherLike_scheduler],
              capacity,
              backpressureStrategy,
            );

            return instance;
          },
          props({}),
          {
            [ObserverLike_notify](
              this: DelegatingLike<ObserverLike<T>>,
              next: T,
            ) {
              this[DelegatingLike_delegate][ObserverLike_notify](next);
            },
          },
        ),
      ))();

    return ((
      capacity: number,
      backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
    ) =>
      pipe(
        createBackpressureObserver,
        partial(capacity, backpressureStrategy),
        Enumerable_lift,
      )) as ObservableBackpressureStrategy;
  })();

export default Observable_backpressureStrategy;
