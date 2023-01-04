import { pipe } from "../../../functions";
import { ObservableLike, ObserverLike_dispatcher } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import { dispatchTo } from "../../../scheduling/DispatcherLike";
import { bindTo } from "../../../util/DisposableLike";
import ObservableLike__create from "./ObservableLike.create";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__subscribeOn =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    ObservableLike__create<T>(({ [ObserverLike_dispatcher]: dispatcher }) =>
      pipe(
        observable,
        ObservableLike__forEach<T>(dispatchTo(dispatcher)),
        ObservableLike__subscribe(scheduler),
        bindTo(dispatcher),
      ),
    );

export default ObservableLike__subscribeOn;
