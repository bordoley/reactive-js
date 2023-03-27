import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Observable_subscribeWithCapacity from "./Observable.subscribeWithCapacity.js";

const Observable_subscribe: <T>(
  scheduler: SchedulerLike,
  options?: { capacity?: number },
) => Function1<ObservableLike<T>, DisposableLike> = (scheduler, options) =>
  Observable_subscribeWithCapacity(
    scheduler,
    options?.capacity ?? MAX_SAFE_INTEGER,
  );

export default Observable_subscribe;
