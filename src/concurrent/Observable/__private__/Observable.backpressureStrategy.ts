import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createBackpressureObserver: <T>(
  delegate: ObserverLike<T>,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(ObserverMixin<T>(), DelegatingDisposableMixin<ObserverLike<T>>()),
      function EnqueueObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
        delegate: ObserverLike<T>,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(DelegatingDisposableMixin<ObserverLike<T>>(), instance, delegate);
        init(ObserverMixin<T>(), instance, delegate, config);

        return instance;
      },
      props(),
      {
        [SinkLike_notify](
          this: DelegatingDisposableLike<ObserverLike<T>>,
          next: T,
        ) {
          this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  ))();

const Observable_backpressureStrategy: Observable.Signature["backpressureStrategy"] =
  <T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ) =>
    pipe(
      createBackpressureObserver<T>,
      partial({
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
        [QueueableLike_capacity]: capacity,
      }),
      Observable_liftPureDeferred<T, T>,
    );

export default Observable_backpressureStrategy;
