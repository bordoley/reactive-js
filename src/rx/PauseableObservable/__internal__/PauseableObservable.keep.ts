import { Keep } from "../../../containers.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { PauseableObservableContainer } from "../../../rx.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_keep: Keep<PauseableObservableContainer>["keep"] = (<
  T,
>(
  predicate: Predicate<T>,
) =>
  pipe(
    Observer_createKeepObserver,
    partial(predicate),
    PauseableObservable_lift,
  )) as Keep<PauseableObservableContainer>["keep"];

export default PauseableObservable_keep;
