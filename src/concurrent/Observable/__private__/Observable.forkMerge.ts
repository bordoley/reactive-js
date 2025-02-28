import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Computation from "../../../computations/Computation.js";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../concurrent.js";
import { Function1, invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_create from "./Observable.create.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_multicast from "./Observable.multicast.js";

const Observable_forkMerge: Observable.Signature["forkMerge"] = (<TIn, TOut>(
    ...ops: readonly Function1<
      MulticastObservableLike<TIn>,
      ObservableLike<TOut>
    >[]
  ) =>
  (obs: ObservableLike<TIn>): ObservableLike<TOut> =>
    Computation.isDeferred(obs)
      ? Observable_create(observer => {
          const src = pipe(
            obs,
            Observable_multicast(observer, { autoDispose: true }),
            Disposable.addTo(observer),
          );

          pipe(
            ops,
            ReadonlyArray.map(op => op(src)),
            Observable_mergeMany,
            invoke(ObservableLike_observe, observer),
          );
        })
      : pipe(
          ops,
          ReadonlyArray.map(op => op(obs as MulticastObservableLike<TIn>)),
          Observable_mergeMany,
        )) as Observable.Signature["forkMerge"];

export default Observable_forkMerge;
