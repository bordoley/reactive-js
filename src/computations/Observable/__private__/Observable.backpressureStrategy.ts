import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import {
  BackpressureStrategy,
  ObserverLike,
  ObserverLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createBackpressureObserver: <T>(
  delegate: ObserverLike<T>,
  config: Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      ObserverMixin<T>(),
      DelegatingDisposableMixin,
      LiftedObserverMixin(),
    ),
    function EnqueueObserver(
      instance: Pick<ObserverLike<T>, typeof ObserverLike_notify>,
      delegate: ObserverLike<T>,
      config: Pick<
        QueueableLike,
        | typeof QueueableLike_capacity
        | typeof QueueableLike_backpressureStrategy
      >,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, instance, delegate);
      init(ObserverMixin<T>(), instance, delegate, config);
      init(LiftedObserverMixin(), instance, delegate);

      return instance;
    },
    props(),
    {
      [ObserverLike_notify](this: LiftedObserverLike<T>, next: T) {
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
      },
    },
  ))();

const Observable_backpressureStrategy: Observable.Signature["backpressureStrategy"] =
  <T>(capacity: number, backpressureStrategy: BackpressureStrategy) =>
    pipe(
      createBackpressureObserver<T>,
      partial({
        [QueueableLike_backpressureStrategy]: backpressureStrategy,
        [QueueableLike_capacity]: capacity,
      }),
      Observable_liftPureDeferred<T, T>,
    );

export default Observable_backpressureStrategy;
