import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  BackpressureStrategy,
  ObserverLike,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";

const createBackpressureObserver: <T>(
  delegate: ObserverLike<T>,
  options: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  },
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin<T>()),
    function BackpressureObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify>,
      delegate: ObserverLike<T>,
      options: {
        capacity: number;
        backpressureStrategy: BackpressureStrategy;
      },
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, options);

      return this;
    },
    props(),
    {
      [LiftedObserverLike_notify](this: LiftedObserverLike<T>, next: T) {
        const delegate = this[LiftedObserverLike_delegate];

        return (
          delegate?.[LiftedObserverLike_notify]?.(next) ??
          delegate[QueueableLike_enqueue](next)
        );
      },
    },
  ))();

const Observable_backpressureStrategy: Observable.Signature["backpressureStrategy"] =
  <T>(options: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
    pipe(
      createBackpressureObserver<T>,
      partial(options),
      Observable_liftPureDeferred<T, T>,
    );

export default Observable_backpressureStrategy;
