import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { SideEffect1, partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_forEach: PauseableObservable.Signature["forEach"] = (<
  T,
>(
  effect: SideEffect1<T>,
) =>
  pipe(
    Observer_createForEachObserver,
    partial(effect),
    PauseableObservable_lift,
  )) as PauseableObservable.Signature["forEach"];

export default PauseableObservable_forEach;
