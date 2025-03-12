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
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import {
  BackpressureStrategy,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
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
      this: ObserverMixinBaseLike<T>,
      delegate: ObserverLike<T>,
      config: Pick<
        QueueableLike,
        | typeof QueueableLike_capacity
        | typeof QueueableLike_backpressureStrategy
      >,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin<T>(), this, delegate, config);
      init(LiftedObserverMixin(), this, delegate);

      return this;
    },
    props(),
    {
      [ObserverMixinBaseLike_notify](this: LiftedObserverLike<T>, next: T) {
        const delegate = this[LiftedObserverLike_delegate];

        return (
          delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
          delegate[QueueableLike_enqueue](next)
        );
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
