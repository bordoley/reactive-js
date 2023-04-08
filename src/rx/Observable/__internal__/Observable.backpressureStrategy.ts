import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  BufferLike_capacity,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";

type ObservableBackpressureStrategy = <C extends ObservableLike, T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => ContainerOperator<C, T, T>;

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
            delegatingMixin(),
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
            init(delegatingMixin(), instance, delegate);

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
