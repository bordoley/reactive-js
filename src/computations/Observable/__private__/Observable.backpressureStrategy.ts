import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

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
      this: unknown,
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
