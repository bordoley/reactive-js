import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../concurrent.js";
import { Function1, invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_multicast from "./Observable.multicast.js";

const Observable_forkMerge: Observable.Signature["forkMerge"] =
  <TIn, TOut>(
    ...ops: readonly Function1<
      MulticastObservableLike<TIn>,
      ObservableLike<TOut>
    >[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    Observable_create(observer => {
      const src = Observable_isDeferred(obs)
        ? pipe(
            obs,
            Observable_multicast(observer, { autoDispose: true }),
            Disposable.addTo(observer),
          )
        : (obs as MulticastObservableLike<TIn>);

      pipe(
        ops,
        ReadonlyArray.map(op => op(src)),
        Observable_mergeMany,
        invoke(ObservableLike_observe, observer),
      );
    });

export default Observable_forkMerge;
