import type * as Observable from "../../Observable.js";
import Observable_concatMany from "../../Observable/__internal__/Observable.concatMany.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import type * as Runnable from "../../Runnable.js";
import { pipe } from "../../functions.js";
import { ContainerOperator, RunnableLike } from "../../types.js";

const Observable_forkConcat: Observable.Signature["forkConcat"] = (<TIn, TOut>(
    ...ops: readonly ContainerOperator<Runnable.Type, TIn, TOut>[]
  ) =>
  (obs: RunnableLike<TIn>) =>
    Observable_concatMany(
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
      ),
    )) as Observable.Signature["forkConcat"];

export default Observable_forkConcat;
