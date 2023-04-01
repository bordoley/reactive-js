import { ContainerOperator } from "../../../containers.js";
import { SideEffect1, alwaysTrue, compose } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_enqueue from "./Observable.enqueue.js";

type ObservableForEach = <C extends ObservableLike, T = unknown>(
  effect: SideEffect1<T>,
) => ContainerOperator<C, T, T>;
const Observable_forEach: ObservableForEach = <T>(effect: SideEffect1<T>) =>
  Observable_enqueue(compose(effect, alwaysTrue));

export default Observable_forEach;
