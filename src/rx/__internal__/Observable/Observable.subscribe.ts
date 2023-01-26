import { Function1, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import { DisposableLike } from "../../../util";
import Disposable$addToIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Observer$create from "../Observer/Observer.create";
import sourceFrom from "../Sink/Sink.sourceFrom";

const Observable$subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = scheduler => observable =>
  pipe(
    scheduler,
    Observer$create,
    Disposable$addToIgnoringChildErrors(scheduler),
    sourceFrom(observable),
  );

export default Observable$subscribe;
