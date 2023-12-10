import { partial, pipe } from "../../../functions.js";
import { QueueableLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_createEnqueueObserver from "../../Observer/__private__/Observer.createEnqueueObserver.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observable_enqueue: Observable.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) =>
  pipe(
    Observer_createEnqueueObserver,
    partial(queue),
    Observable_liftWithSideEffects,
  );

export default Observable_enqueue;
