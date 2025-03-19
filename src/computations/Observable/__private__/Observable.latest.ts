import { Array_push } from "../../../__internal__/constants.js";

import { ObservableLike, SourceLike_subscribe } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";
import * as Latest from "../../__internal__/operators/Latest.js";
import {
  LatestCtx_completedCount,
  LatestCtx_mode,
  LatestCtx_values,
} from "../../__internal__/operators/Latest.js";

const Observable_latest = (
  Observables: readonly ObservableLike<any>[],
  mode: Latest.LatestMode,
): ObservableLike<readonly unknown[]> =>
  Source.create((delegate: ObserverLike<readonly unknown[]>) => {
    const ctx: Latest.LatestCtx = {
      [LatestCtx_completedCount]: 0,
      [LatestCtx_values]: [],
      [LatestCtx_mode]: mode,
    };

    for (const observable of Observables) {
      const innerSink = pipe(
        Latest.createObserver(delegate, ctx),
        Disposable.addTo(delegate),
      );

      ctx[LatestCtx_values][Array_push](innerSink);
      observable[SourceLike_subscribe](innerSink);
    }
  });

export const Observable_combineLatest: Observable.Signature["combineLatest"] =
  ((...observables: readonly ObservableLike<any>[]) =>
    Observable_latest(observables, 1)) as Observable.Signature["combineLatest"];

export const Observable_zipLatest: Observable.Signature["zipLatest"] = ((
  ...observables: readonly ObservableLike<any>[]
) => Observable_latest(observables, 2)) as Observable.Signature["zipLatest"];
