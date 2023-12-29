import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
} from "../../../concurrent.js";
import { Function1, invoke, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_multicast from "./Observable.multicast.js";

const Observable_forkMerge: Observable.Signature["forkMerge"] = (<TIn, TOut>(
    ...ops: readonly Function1<ObservableLike<TIn>, ObservableLike<TOut>>[]
  ) =>
  (obs: ObservableLike<TIn>) => {
    const mapped = pipe(
      ops,
      ReadonlyArray.map(op => op(obs)),
    );

    return Observable_allArePure(mapped)
      ? Observable_mergeMany(mapped)
      : Observable_createWithConfig(
          observer => {
            const src = Observable_isDeferred(obs)
              ? pipe(obs, Observable_multicast(observer, { autoDispose: true }))
              : obs;

            pipe(
              ops,
              ReadonlyArray.map(op => op(src)),
              Observable_mergeMany,
              invoke(ObservableLike_observe, observer),
            );
          },
          {
            [ObservableLike_isPure]: false,
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isRunnable]: Observable_allAreRunnable(mapped),
          },
        );
  }) as Observable.Signature["forkMerge"];

export default Observable_forkMerge;
