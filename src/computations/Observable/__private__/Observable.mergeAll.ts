import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike,
  EventSourceLike_subscribe,
  ObservableLike,
} from "../../../computations.js";
import { Optional } from "../../../functions.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import UnscheduledObserverMixin from "../../../utils/__mixins__/UnscheduledObserverMixin.js";
import {
  BackpressureStrategy,
  ObserverLike,
  OverflowBackpressureStrategy,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import MergeAllConsumerMixin from "../../__mixins__/MergeAllConsumerMixin.js";

export const createMergeAllObserver: <
  TInnerSource extends EventSourceLike<T, ObserverLike<T>>,
  T,
>(
  delegate: ObserverLike<T>,
  options: Optional<{
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
    concurrency?: number;
  }>,
) => ObserverLike<TInnerSource> =
  /*@__PURE__*/
  (<TInnerSource extends EventSourceLike<T, ObserverLike<T>>, T>() =>
    mixInstanceFactory(
      include(
        MergeAllConsumerMixin(),
        DelegatingSchedulerMixin,
        UnscheduledObserverMixin(),
      ),
      function MergeAllObserver(
        this: unknown,
        delegate: ObserverLike<T>,
        options: Optional<{
          backpressureStrategy?: BackpressureStrategy;
          capacity?: number;
          concurrency?: number;
        }>,
      ): ObserverLike<TInnerSource> {
        init(
          MergeAllConsumerMixin<TInnerSource, ObserverLike<T>, T>(),
          this,
          delegate,
          options,
          Observer.createDelegatingNonCompleting,
        );
        init(DelegatingSchedulerMixin, this, delegate);
        init(UnscheduledObserverMixin(), this);

        return this;
      },
    ))();

export const Observable_mergeAll: Observable.Signature["mergeAll"] = (<
    T,
    TInnerLike,
  >(
    options?: TInnerLike &
      Optional<{
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
        concurrency?: number;
      }>,
  ) =>
  (obs: ObservableLike<ObservableLike<T>>) =>
    DeferredEventSource.create(
      (observer: ObserverLike<T>) => {
        const delegate = createMergeAllObserver(observer, options);
        obs[EventSourceLike_subscribe](delegate);
      },
      {
        [ComputationLike_isPure]:
          Computation.isPure(obs) && Computation.isPure(options ?? {}),
        [ComputationLike_isSynchronous]:
          Computation.isSynchronous(obs) &&
          Computation.isSynchronous(options ?? {}),
      },
    )) as Observable.Signature["mergeAll"];

export const Observable_concatAll: Observable.Signature["concatAll"] =
  (options =>
    Observable_mergeAll({
      ...options,
      concurrency: 1,
      capacity: MAX_SAFE_INTEGER,
      backpressureStrategy: OverflowBackpressureStrategy,
    })) as Observable.Signature["concatAll"];
