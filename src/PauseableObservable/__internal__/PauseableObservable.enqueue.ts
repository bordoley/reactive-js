import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import { partial, pipe } from "../../functions.js";
import { QueueableLike } from "../../types.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";

const PauseableObservable_enqueue: PauseableObservable.Signature["enqueue"] = (<
  T,
>(
  queue: QueueableLike<T>,
) =>
  pipe(
    Observer_createEnqueueObserver,
    partial(queue),
    PauseableObservable_lift,
  )) as PauseableObservable.Signature["enqueue"];

export default PauseableObservable_enqueue;
