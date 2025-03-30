import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { ObservableLike } from "../../../computations.js";
import DelegatingConsumerMixin from "../../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
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
        DelegatingSchedulerMixin,
      ),
      function LatestObserver(
        this: unknown,
        delegate: ObserverLike<ReadonlyArray<unknown>>,
        context: LatestEventListenerContextLike,
      ): ObserverLike & LatestEventListenerLike {
        init(DelegatingConsumerMixin(), this, delegate);
        init(LatestEventListenerMixin(), this, delegate, context);
        init(DelegatingSchedulerMixin, this, delegate);

        return this;
      },
    ))();

export const Observable_combineLatest: Observable.Signature["combineLatest"] =
  ((...observables: readonly ObservableLike<any>[]) =>
    DeferredSource.latest(
      observables,
      "combine-latest",
      createLatestObserver,
    )) as Observable.Signature["combineLatest"];

export const Observable_zipLatest: Observable.Signature["zipLatest"] = ((
  ...observables: readonly ObservableLike<any>[]
) =>
  DeferredSource.latest(
    observables,
    "zip-latest",
    createLatestObserver,
  )) as Observable.Signature["zipLatest"];
