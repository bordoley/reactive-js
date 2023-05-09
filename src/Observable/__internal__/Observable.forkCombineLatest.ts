import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkCombineLatest: ObservableContainer.TypeClass["forkZip"] =
  (<T>(
      ...ops: readonly Containers.Operator<
        ObservableContainer.Type,
        T,
        unknown
      >[]
    ): Containers.Operator<ObservableContainer.Type, T, readonly unknown[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        1,
      )) as ObservableContainer.TypeClass["forkZip"];

export default Observable_forkCombineLatest;
