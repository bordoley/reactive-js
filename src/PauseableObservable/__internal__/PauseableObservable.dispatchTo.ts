import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import { partial, pipe } from "../../functions.js";
import {
  DispatcherLike,
  ObservableContainers,
  PauseableObservableContainer,
} from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_dispatchTo: ObservableContainers.TypeClass<PauseableObservableContainer>["dispatchTo"] =
  (<T>(dispatcher: DispatcherLike<T>) =>
    pipe(
      Observer_createDispatchToObserver,
      partial(dispatcher),
      PauseableObservable_lift,
    )) as ObservableContainers.TypeClass<PauseableObservableContainer>["dispatchTo"];

export default PauseableObservable_dispatchTo;
