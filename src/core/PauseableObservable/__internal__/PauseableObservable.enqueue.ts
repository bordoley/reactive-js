import {
  PauseableObservableContainer,
  QueueableLike,
  ReactiveContainer,
} from "../../../core.js";
import { partial, pipe } from "../../../functions.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_enqueue: ReactiveContainer.Enqueue<PauseableObservableContainer>["enqueue"] =
  (<T>(queue: QueueableLike<T>) =>
    pipe(
      Observer_createEnqueueObserver,
      partial(queue),
      PauseableObservable_lift,
    )) as ReactiveContainer.Enqueue<PauseableObservableContainer>["enqueue"];

export default PauseableObservable_enqueue;
