import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { SideEffect1, partial, pipe } from "../../functions.js";

type ObservableForEach = <C extends ObservableContainer.Type, T = unknown>(
  effect: SideEffect1<T>,
) => Containers.Operator<C, T, T>;
const Observable_forEach: ObservableForEach = (<T>(effect: SideEffect1<T>) =>
  pipe(
    Observer_createForEachObserver,
    partial(effect),
    Enumerable_lift,
  )) as ObservableForEach;

export default Observable_forEach;
