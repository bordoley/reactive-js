import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import { Containers, PauseableObservableContainer } from "../../containers.js";
import { SideEffect1, partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

type PauseableObservableForEach = <
  C extends PauseableObservableContainer.Type,
  T = unknown,
>(
  effect: SideEffect1<T>,
) => Containers.Operator<C, T, T>;
const PauseableObservable_forEach: PauseableObservableForEach = (<T>(
  effect: SideEffect1<T>,
) =>
  pipe(
    Observer_createForEachObserver,
    partial(effect),
    PauseableObservable_lift,
  )) as PauseableObservableForEach;

export default PauseableObservable_forEach;
