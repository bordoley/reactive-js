import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Observable_subscribeWithMaxBufferSize from "./Observable.subscribeWithMaxBufferSize.js";

const Observable_subscribe: <T>(
  scheduler: SchedulerLike,
  options?: { maxBufferSize?: number },
) => Function1<ObservableLike<T>, DisposableLike> = (scheduler, options) =>
  Observable_subscribeWithMaxBufferSize(
    scheduler,
    options?.maxBufferSize ?? MAX_SAFE_INTEGER,
  );

export default Observable_subscribe;
