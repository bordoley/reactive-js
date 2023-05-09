import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { Predicate, partial, pipe } from "../../functions.js";
import { Containers, PauseableObservableContainer } from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_keep: Containers.TypeClass<PauseableObservableContainer>["keep"] =
  (<T>(predicate: Predicate<T>) =>
    pipe(
      Observer_createKeepObserver,
      partial(predicate),
      PauseableObservable_lift,
    )) as Containers.TypeClass<PauseableObservableContainer>["keep"];

export default PauseableObservable_keep;
