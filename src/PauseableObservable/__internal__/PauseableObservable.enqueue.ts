import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { PauseableObservableContainer } from "../../containers.js";
import { partial, pipe } from "../../functions.js";
import { QueueableLike } from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_enqueue: PauseableObservableContainer.TypeClass["enqueue"] =
  (<T>(queue: QueueableLike<T>) =>
    pipe(
      Observer_createEnqueueObserver,
      partial(queue),
      PauseableObservable_lift,
    )) as PauseableObservableContainer.TypeClass["enqueue"];

export default PauseableObservable_enqueue;
