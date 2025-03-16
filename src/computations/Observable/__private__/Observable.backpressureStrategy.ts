import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import * as DelegatingObserver from "../../../utils/__internal__/DelegatingObserver.js";
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
      // Wrap the delegate in a delegating observer to prevent
      // notifications from bypassing the backpressure checks.
      // LiftedObserverMixin bypasses EventListnerLike_notify calls
      // when chained. The delegate here prevents it from doing so.
      const wrappedDelegate = DelegatingObserver.create(delegate);
      init(DelegatingDisposableMixin, this, wrappedDelegate);
      init(LiftedObserverMixin<T>(), this, wrappedDelegate, options);

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
