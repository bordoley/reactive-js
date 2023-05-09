import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { Container, ObservableContainer } from "../../containers.js";
import { Predicate, partial, pipe } from "../../functions.js";

type ObservableKeep = <C extends ObservableContainer.Type, T>(
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
