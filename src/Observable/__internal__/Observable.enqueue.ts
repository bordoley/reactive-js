import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { partial, pipe } from "../../functions.js";
import { QueueableLike } from "../../types.js";

type ObservableEnqueue = <C extends ObservableContainer.Type, T = unknown>(
  queue: QueueableLike<T>,
) => Containers.Operator<C, T, T>;
const Observable_enqueue: ObservableEnqueue = (<T>(queue: QueueableLike<T>) =>
  pipe(
    Observer_createEnqueueObserver,
    partial(queue),
    Enumerable_lift,
  )) as ObservableEnqueue;

export default Observable_enqueue;
