import type * as Observable from "../../Observable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import { ContainerOperator, ObservableLike } from "../../types.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkZipLatest: Observable.Signature["forkZipLatest"] = (<T>(
    ...ops: readonly ContainerOperator<Observable.Type, T, unknown>[]
  ): ContainerOperator<Observable.Type, T, readonly any[]> =>
  (obs: ObservableLike<T>) =>
    Observable_latest(
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
      ),
      2,
    )) as Observable.Signature["forkZipLatest"];

export default Observable_forkZipLatest;
