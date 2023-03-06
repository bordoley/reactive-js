import { pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike_dispatcher } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Queue_pushTo from "../../../util/Queue/__internal__/Queue.pushTo.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_subscribeOn =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    Observable_create<T>(observer =>
      pipe(
        observable,
        Observable_forEach<ObservableLike, T>(
          Queue_pushTo(observer[ObserverLike_dispatcher]),
        ),
        Observable_subscribe(scheduler),
        Disposable_bindTo(observer[ObserverLike_dispatcher]),
      ),
    );

export default Observable_subscribeOn;
