import { Function1, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Disposable_addToIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Observer_create from "../Observer/Observer.create";
import sourceFrom from "../Sink/Sink.sourceFrom";

const Observable_subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = scheduler => observable =>
  pipe(
    scheduler,
    Observer_create,
    Disposable_addToIgnoringChildErrors(scheduler),
    sourceFrom(observable),
  );

export default Observable_subscribe;
