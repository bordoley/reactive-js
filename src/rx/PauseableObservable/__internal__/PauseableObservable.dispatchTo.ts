import { partial, pipe } from "../../../functions.js";
import { DispatchTo, PauseableObservableContainer } from "../../../rx.js";
import { DispatcherLike } from "../../../util.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_dispatchTo: DispatchTo<PauseableObservableContainer>["dispatchTo"] =
  (<T>(dispatcher: DispatcherLike<T>) =>
    pipe(
      Observer_createDispatchToObserver,
      partial(dispatcher),
      PauseableObservable_lift,
    )) as DispatchTo<PauseableObservableContainer>["dispatchTo"];

export default PauseableObservable_dispatchTo;
