import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { partial, pipe } from "../../functions.js";
import {
  ObservableContainers,
  PauseableObservableContainer,
  QueueableLike,
} from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_enqueue: ObservableContainers.TypeClass<PauseableObservableContainer>["enqueue"] =
  (<T>(queue: QueueableLike<T>) =>
    pipe(
      Observer_createEnqueueObserver,
      partial(queue),
      PauseableObservable_lift,
    )) as ObservableContainers.TypeClass<PauseableObservableContainer>["enqueue"];

export default PauseableObservable_enqueue;
