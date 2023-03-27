import { Function1, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Observable_subscribeWithCapacity: <T>(
  scheduler: SchedulerLike,
  capacity: number,
) => Function1<ObservableLike<T>, DisposableLike> =
  (scheduler, capacity) => observable =>
    pipe(
      Observer_create(scheduler, capacity),
      Disposable_addToIgnoringChildErrors(scheduler),
      sourceFrom(observable),
    );

export default Observable_subscribeWithCapacity;
