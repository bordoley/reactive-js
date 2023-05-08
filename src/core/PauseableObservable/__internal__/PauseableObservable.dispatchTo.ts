import {
  DispatcherLike,
  PauseableObservableContainer,
  ReactiveContainer,
} from "../../../core.js";
import { partial, pipe } from "../../../functions.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_dispatchTo: ReactiveContainer.DispatchTo<PauseableObservableContainer>["dispatchTo"] =
  (<T>(dispatcher: DispatcherLike<T>) =>
    pipe(
      Observer_createDispatchToObserver,
      partial(dispatcher),
      PauseableObservable_lift,
    )) as ReactiveContainer.DispatchTo<PauseableObservableContainer>["dispatchTo"];

export default PauseableObservable_dispatchTo;
