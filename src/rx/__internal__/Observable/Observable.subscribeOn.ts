import { pipe } from "../../../functions";
import { ObservableLike, ObserverLike_dispatcher } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Dispatcher$dispatchTo from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo";
import Disposable$bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Observable$create from "./Observable.create";
import Observable$forEach from "./Observable.forEach";
import Observable$subscribe from "./Observable.subscribe";

const Observable$subscribeOn =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    Observable$create<T>(({ [ObserverLike_dispatcher]: dispatcher }) =>
      pipe(
        observable,
        Observable$forEach<T>(Dispatcher$dispatchTo(dispatcher)),
        Observable$subscribe(scheduler),
        Disposable$bindTo(dispatcher),
      ),
    );

export default Observable$subscribeOn;
