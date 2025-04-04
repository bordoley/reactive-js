import {
  ComputationLike_isPure,
  ObservableLike,
} from "../../../computations.js";
import { Function1, compose } from "../../../functions.js";
import { ObserverLike, SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_fromBroadcaster from "./Observable.fromBroadcaster.js";
import Observable_merge from "./Observable.merge.js";
import Observable_toProducer from "./Observable.toProducer.js";

const toBroadcaster = (scheduler: SchedulerLike) =>
  compose(Observable_toProducer({ scheduler }), Producer_broadcast());

const Observable_forkMerge: Observable.Signature["forkMerge"] = (<TIn, TOut>(
  ...ops: readonly [
    ...Function1<ObservableLike<TIn>, ObservableLike<TOut>>[],
    {
      [ComputationLike_isPure]?: boolean;
    },
  ]
) =>
  DeferredEventSource.forkMerge<
    TIn,
    ObserverLike<TIn>,
    TOut,
    ObserverLike<TOut>
  >(
    toBroadcaster,
    Observable_fromBroadcaster,
    Observable_merge,
    ops,
  )) as unknown as Observable.Signature["forkMerge"];

export default Observable_forkMerge;
