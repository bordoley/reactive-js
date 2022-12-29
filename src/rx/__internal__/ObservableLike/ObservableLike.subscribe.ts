import { Function1, pipe } from "../../../functions";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import { DisposableLike } from "../../../util";
import DisposableLike__addToIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors";
import ObserverLike__create from "../ObserverLike/ObserverLike.create";
import sourceFrom from "../SinkLike/SinkLike.sourceFrom";

const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = scheduler => observable =>
  pipe(
    scheduler,
    ObserverLike__create,
    DisposableLike__addToIgnoringChildErrors(scheduler),
    sourceFrom(observable),
  );

export default subscribe;
