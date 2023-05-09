import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { PauseableObservableContainer } from "../../containers.js";
import { Predicate, partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_keep: PauseableObservableContainer.TypeClass["keep"] =
  (<T>(predicate: Predicate<T>) =>
    pipe(
      Observer_createKeepObserver,
      partial(predicate),
      PauseableObservable_lift,
    )) as PauseableObservableContainer.TypeClass["keep"];

export default PauseableObservable_keep;
