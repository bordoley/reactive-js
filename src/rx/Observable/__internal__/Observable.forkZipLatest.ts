import { ContainerOperator } from "../../../containers.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import { ObservableContainer, ObservableLike, Reactive } from "../../../rx.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkZipLatest: Reactive.ForkZipLatest<ObservableContainer>["forkZipLatest"] =
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
      )) as Reactive.ForkZipLatest<ObservableContainer>["forkZipLatest"];

export default Observable_forkZipLatest;
