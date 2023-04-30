import { ContainerOperator } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
import { QueueableLike } from "../../../util.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";

type ObservableEnqueue = <C extends ObservableContainer, T = unknown>(
  queue: QueueableLike<T>,
) => ContainerOperator<C, T, T>;
const Observable_enqueue: ObservableEnqueue = (<T>(queue: QueueableLike<T>) =>
  pipe(
    Observer_createEnqueueObserver,
    partial(queue),
    Enumerable_lift,
  )) as ObservableEnqueue;

export default Observable_enqueue;
