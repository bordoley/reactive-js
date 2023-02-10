import { pipe } from "../../../functions";
import { ObservableLike, ObserverLike_dispatcher } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import Dispatcher_dispatchTo from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatchTo";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo";
import Observable_create from "./Observable.create";
import Observable_forEach from "./Observable.forEach";
import Observable_subscribe from "./Observable.subscribe";

const Observable_subscribeOn =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    Observable_create<T>(({ [ObserverLike_dispatcher]: dispatcher }) =>
      pipe(
        observable,
        Observable_forEach<T>(Dispatcher_dispatchTo(dispatcher)),
        Observable_subscribe(scheduler),
        Disposable_bindTo(dispatcher),
      ),
    );

export default Observable_subscribeOn;
