import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { ObservableLike } from "../../../computations.js";
import DelegatingConsumerMixin from "../../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingObserverSchedulerMixin from "../../../utils/__mixins__/DelegatingObserverSchedulerMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import LatestEventListenerMixin, {
  LatestEventListenerContextLike,
  LatestEventListenerLike,
} from "../../__mixins__/LatestEventListenerMixin.js";

const createLatestObserver: (
  delegate: ObserverLike,
  context: LatestEventListenerContextLike,
) => ObserverLike & LatestEventListenerLike =
  /*@__PURE__*/
  (() =>
    mixInstanceFactory(
      include(
        DelegatingConsumerMixin(),
        LatestEventListenerMixin(),
        DelegatingObserverSchedulerMixin(),
      ),
      function LatestObserver(
        this: unknown,
        delegate: ObserverLike<ReadonlyArray<unknown>>,
        context: LatestEventListenerContextLike,
      ): ObserverLike & LatestEventListenerLike {
        init(DelegatingConsumerMixin(), this, delegate);
        init(LatestEventListenerMixin(), this, delegate, context);
        init(DelegatingObserverSchedulerMixin(), this, delegate);

        return this;
      },
    ))();

export const Observable_combineLatest: Observable.Signature["combineLatest"] =
  ((...observables: readonly ObservableLike<any>[]) =>
    DeferredEventSource.latest(
      observables,
      "combine-latest",
      createLatestObserver,
    )) as Observable.Signature["combineLatest"];

export const Observable_zipLatest: Observable.Signature["zipLatest"] = ((
  ...observables: readonly ObservableLike<any>[]
) =>
  DeferredEventSource.latest(
    observables,
    "zip-latest",
    createLatestObserver,
  )) as Observable.Signature["zipLatest"];
