import { ContainerOperator } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  ForkZipLatest,
  ObservableContainerLike,
  ObservableLike,
} from "../../../rx.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkZipLatest: ForkZipLatest<ObservableContainerLike>["forkZipLatest"] =
  (<T>(
      ...ops: readonly ContainerOperator<ObservableContainerLike, T, unknown>[]
    ): ContainerOperator<ObservableContainerLike, T, readonly any[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        2,
      )) as ForkZipLatest<ObservableContainerLike>["forkZipLatest"];

export default Observable_forkZipLatest;
