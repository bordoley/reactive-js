import type * as Observable from "../../Observable.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { partial, pipe } from "../../functions.js";
import { QueueableLike } from "../../types.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_enqueue: Observable.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) =>
  pipe(Observer_createEnqueueObserver, partial(queue), Observable_liftSource);

export default Observable_enqueue;
