import {
  Container,
  ObservableContainer,
  ObservableLike,
  ReactiveContainer,
} from "../../../core.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkZipLatest: ReactiveContainer.TypeClass<ObservableContainer>["forkZipLatest"] =
  (<T>(
      ...ops: readonly Container.Operator<ObservableContainer, T, unknown>[]
    ): Container.Operator<ObservableContainer, T, readonly any[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        2,
      )) as ReactiveContainer.TypeClass<ObservableContainer>["forkZipLatest"];

export default Observable_forkZipLatest;
