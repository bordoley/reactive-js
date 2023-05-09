import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import { PauseableObservableContainer } from "../../containers.js";
import { partial, pipe } from "../../functions.js";
import { DispatcherLike } from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_dispatchTo: PauseableObservableContainer.TypeClass["dispatchTo"] =
  (<T>(dispatcher: DispatcherLike<T>) =>
    pipe(
      Observer_createDispatchToObserver,
      partial(dispatcher),
      PauseableObservable_lift,
    )) as PauseableObservableContainer.TypeClass["dispatchTo"];

export default PauseableObservable_dispatchTo;
