import {
  ComputationLike_isPure,
  ObservableLike,
} from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import Broadcaster_toObservable from "../../Broadcaster/__private__/Broadcaster.toObservable.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_broadcast from "./Observable.broadcast.js";
import Observable_merge from "./Observable.merge.js";

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
    Observable_broadcast,
    Broadcaster_toObservable,
    Observable_merge,
    ops,
  )) as Observable.Signature["forkMerge"];

export default Observable_forkMerge;
