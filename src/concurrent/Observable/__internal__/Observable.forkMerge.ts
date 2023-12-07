import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import ReadonlyArray_map from "../../../collections/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  DeferredObservableLike,
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
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_share from "./Observable.share.js";

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
            const src = pipe(
              obs as DeferredObservableLike<TIn>,
              Observable_share(observer),
            );

            pipe(
              ops,
              ReadonlyArray_map(op => op(src)),
              Observable_mergeMany,
              invoke(ObservableLike_observe, observer),
            );
          },
          {
            [ObservableLike_isPure]: false,
            [ObservableLike_isDeferred]: true,
            [ObservableLike_isRunnable]:
              Observable_isRunnable(obs) && Observable_allAreRunnable(mapped),
          },
        );
  }) as Observable.Signature["forkMerge"];

export default Observable_forkMerge;
