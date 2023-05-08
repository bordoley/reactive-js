import { Container, PauseableObservableContainer } from "../../../core.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_keep: Container.TypeClass<PauseableObservableContainer>["keep"] =
  (<T>(predicate: Predicate<T>) =>
    pipe(
      Observer_createKeepObserver,
      partial(predicate),
      PauseableObservable_lift,
    )) as Container.TypeClass<PauseableObservableContainer>["keep"];

export default PauseableObservable_keep;
