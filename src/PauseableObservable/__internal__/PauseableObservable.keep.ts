import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { Predicate, partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_keep: PauseableObservable.Signature["keep"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    Observer_createKeepObserver,
    partial(predicate),
    PauseableObservable_lift,
  )) as PauseableObservable.Signature["keep"];

export default PauseableObservable_keep;
