import { partial, pipe } from "../../../functions.js";
import Observer_createEnqueueObserver from "../../../utils/Observer/__internal__/Observer.createEnqueueObserver.js";
import { QueueableLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";

const Observable_enqueue: Observable.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) =>
  pipe(
    Observer_createEnqueueObserver<T>,
    partial(queue),
    Observable_liftWithSideEffects,
  );

export default Observable_enqueue;
