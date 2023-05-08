import {
  Containers,
  ObservableContainer,
  ObservableLike,
} from "../../../core.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../../functions.js";
import Observable_latest from "./Observable.latest.js";

const Observable_forkCombineLatest: Containers.TypeClass<ObservableContainer>["forkZip"] =
  (<T>(
      ...ops: readonly Containers.Operator<ObservableContainer, T, unknown>[]
    ): Containers.Operator<ObservableContainer, T, readonly unknown[]> =>
    (obs: ObservableLike<T>) =>
      Observable_latest(
        pipe(
          ops,
          ReadonlyArray_map(op => op(obs)),
        ),
        1,
      )) as Containers.TypeClass<ObservableContainer>["forkZip"];

export default Observable_forkCombineLatest;
