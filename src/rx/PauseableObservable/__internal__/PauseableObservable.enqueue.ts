import { partial, pipe } from "../../../functions.js";
import { PauseableObservableContainer, Reactive } from "../../../rx.js";
import { QueueableLike } from "../../../util.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_enqueue: Reactive.Enqueue<PauseableObservableContainer>["enqueue"] =
  (<T>(queue: QueueableLike<T>) =>
    pipe(
      Observer_createEnqueueObserver,
      partial(queue),
      PauseableObservable_lift,
    )) as Reactive.Enqueue<PauseableObservableContainer>["enqueue"];

export default PauseableObservable_enqueue;
