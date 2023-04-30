import { ContainerOperator } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  ForkZipLatest,
  ObservableContainer,
  ObservableLike,
} from "../../../rx.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkZipLatest: ForkZipLatest<ObservableContainer>["forkZipLatest"] =
  (<T>(
      ...ops: readonly ContainerOperator<ObservableContainer, T, unknown>[]
    ): ContainerOperator<ObservableContainer, T, readonly any[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        2,
      )) as ForkZipLatest<ObservableContainer>["forkZipLatest"];

export default Observable_forkZipLatest;
