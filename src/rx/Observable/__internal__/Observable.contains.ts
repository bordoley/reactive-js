import { ContainerOperator } from "../../../containers.js";
import Container_contains from "../../../containers/Container/__internal__/Container.contains.js";
import { Equality } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_someSatisfy from "./Observable.someSatisfy.js";

type ObservableContains = <C extends ObservableLike, T>(
  value: T,
  options?:
    | {
        readonly equality?: Equality<T> | undefined;
      }
    | undefined,
) => ContainerOperator<C, T, boolean>;
const Observable_contains: ObservableContains =
  /*@__PURE__*/ Container_contains(
    Observable_someSatisfy,
  ) as ObservableContains;

export default Observable_contains;
