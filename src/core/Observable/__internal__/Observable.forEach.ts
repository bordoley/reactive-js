import { Containers, ObservableContainer } from "../../../core.js";
import { SideEffect1, partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";

type ObservableForEach = <C extends ObservableContainer, T = unknown>(
  effect: SideEffect1<T>,
) => Containers.Operator<C, T, T>;
const Observable_forEach: ObservableForEach = (<T>(effect: SideEffect1<T>) =>
  pipe(
    Observer_createForEachObserver,
    partial(effect),
    Enumerable_lift,
  )) as ObservableForEach;

export default Observable_forEach;
