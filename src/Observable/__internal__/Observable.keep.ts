import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { Predicate, partial, pipe } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";

type ObservableKeep = <C extends ObservableContainer, T>(
  predicate: Predicate<T>,
  options?: undefined,
) => Containers.Operator<C, T, T>;
const Observable_keep: ObservableKeep = (<T>(predicate: Predicate<T>) =>
  pipe(
    Observer_createKeepObserver,
    partial(predicate),
    Enumerable_lift,
  )) as ObservableKeep;

export default Observable_keep;
