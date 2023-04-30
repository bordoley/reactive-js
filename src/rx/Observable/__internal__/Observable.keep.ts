import { ContainerOperator } from "../../../containers.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";

type ObservableKeep = <C extends ObservableContainerLike, T>(
  predicate: Predicate<T>,
  options?: undefined,
) => ContainerOperator<C, T, T>;
const Observable_keep: ObservableKeep = (<T>(predicate: Predicate<T>) =>
  pipe(
    Observer_createKeepObserver,
    partial(predicate),
    Enumerable_lift,
  )) as ObservableKeep;

export default Observable_keep;
