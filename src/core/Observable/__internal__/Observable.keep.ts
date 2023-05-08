import { Container, ObservableContainer } from "../../../core.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";

type ObservableKeep = <C extends ObservableContainer, T>(
  predicate: Predicate<T>,
  options?: undefined,
) => Container.Operator<C, T, T>;
const Observable_keep: ObservableKeep = (<T>(predicate: Predicate<T>) =>
  pipe(
    Observer_createKeepObserver,
    partial(predicate),
    Enumerable_lift,
  )) as ObservableKeep;

export default Observable_keep;
