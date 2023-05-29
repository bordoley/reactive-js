import type * as Observable from "../../Observable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { Function1, invoke, pipe } from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObservableWithSideEffectsLike,
} from "../../types.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_isPure from "./Observable.isPure.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_share from "./Observable.share.js";

const Observable_forkMerge: Observable.Signature["forkMerge"] = (<TIn, TOut>(
    ...ops: readonly Function1<ObservableLike<TIn>, ObservableLike<TOut>>[]
  ) =>
  (obs: ObservableLike<TIn>) => {
    const mapped = pipe(
      ops,
      ReadonlyArray_map(op => op(obs)),
    );

    return Observable_isPure(obs)
      ? Observable_mergeMany(mapped)
      : Observable_createWithConfig(
          observer => {
            const src = pipe(
              obs as ObservableWithSideEffectsLike<TIn>,
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
