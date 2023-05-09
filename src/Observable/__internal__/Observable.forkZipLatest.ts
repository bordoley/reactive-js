import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import {
  Containers,
  ObservableContainer,
  ObservableContainers,
  ObservableLike,
} from "../../types.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkZipLatest: ObservableContainers.TypeClass<ObservableContainer>["forkZipLatest"] =
  (<T>(
      ...ops: readonly Containers.Operator<ObservableContainer, T, unknown>[]
    ): Containers.Operator<ObservableContainer, T, readonly any[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        2,
      )) as ObservableContainers.TypeClass<ObservableContainer>["forkZipLatest"];

export default Observable_forkZipLatest;
