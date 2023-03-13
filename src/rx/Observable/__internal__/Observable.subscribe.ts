import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { max } from "../../../__internal__/math.js";
import { Function1, pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

const Observable_subscribe: <T>(
  scheduler: SchedulerLike,
  options?: { maxBufferSize?: number },
) => Function1<ObservableLike<T>, DisposableLike> = (scheduler, options) => {
  const maxBuffersize = max(options?.maxBufferSize ?? MAX_SAFE_INTEGER, 1);
  return observable =>
    pipe(
      Observer_create(scheduler, maxBuffersize),
      Disposable_addToIgnoringChildErrors(scheduler),
      sourceFrom(observable),
    );
};

export default Observable_subscribe;
