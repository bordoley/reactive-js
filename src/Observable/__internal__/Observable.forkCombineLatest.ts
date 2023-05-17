import type * as Observable from "../../Observable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import { ContainerOperator, ObservableLike } from "../../types.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkCombineLatest: Observable.Signature["forkCombineLatest"] =
  (<T>(
      ...ops: readonly ContainerOperator<Observable.Type, T, unknown>[]
    ): ContainerOperator<Observable.Type, T, readonly unknown[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        1,
      )) as Observable.Signature["forkCombineLatest"];

export default Observable_forkCombineLatest;
