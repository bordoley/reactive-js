import { partial, pipe } from "../../../functions.js";
import { PauseableObservableContainer, Reactive } from "../../../rx.js";
import { DispatcherLike } from "../../../util.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_dispatchTo: Reactive.DispatchTo<PauseableObservableContainer>["dispatchTo"] =
  (<T>(dispatcher: DispatcherLike<T>) =>
    pipe(
      Observer_createDispatchToObserver,
      partial(dispatcher),
      PauseableObservable_lift,
    )) as Reactive.DispatchTo<PauseableObservableContainer>["dispatchTo"];

export default PauseableObservable_dispatchTo;
