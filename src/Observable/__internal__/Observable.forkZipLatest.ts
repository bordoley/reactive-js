import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkZipLatest: ObservableContainer.TypeClass["forkZipLatest"] =
  (<T>(
      ...ops: readonly Containers.Operator<
        ObservableContainer.Type,
        T,
        unknown
      >[]
    ): Containers.Operator<ObservableContainer.Type, T, readonly any[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        2,
      )) as ObservableContainer.TypeClass["forkZipLatest"];

export default Observable_forkZipLatest;
