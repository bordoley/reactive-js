import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { partial, pipe } from "../../functions.js";
import {
  BufferLike_capacity,
  ObserverLike,
  ObserverLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";

type ObservableBackpressureStrategy = <C extends ObservableContainer, T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => Containers.Operator<C, T, T>;

const Observable_backpressureStrategy: ObservableBackpressureStrategy =
  /*@__PURE__*/ (<T>() => {
    const createBackpressureObserver: (
      delegate: ObserverLike<T>,
      config: {
        readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly [BufferLike_capacity]: number;
      },
    ) => ObserverLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(
            Observer_delegatingMixin<T>(),
            Disposable_delegatingMixin,
            Delegating_mixin(),
          ),
          function EnqueueObserver(
            instance: Pick<ObserverLike<T>, typeof ObserverLike_notify>,
            delegate: ObserverLike<T>,
            config: {
              readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
              readonly [BufferLike_capacity]: number;
            },
          ): ObserverLike<T> {
            init(Disposable_delegatingMixin, instance, delegate);
            init(Observer_delegatingMixin<T>(), instance, delegate, config);
            init(Delegating_mixin(), instance, delegate);

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
        partial({
          [QueueableLike_backpressureStrategy]: backpressureStrategy,
          [BufferLike_capacity]: capacity,
        }),
        Enumerable_lift,
      )) as ObservableBackpressureStrategy;
  })();

export default Observable_backpressureStrategy;
