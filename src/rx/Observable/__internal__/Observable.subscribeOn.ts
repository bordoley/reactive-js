import { pipe } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Queue_pushTo from "../../../util/Queue/__internal__/Queue.pushTo.js";
import Observer_getDispatcher from "../../Observer/__internal__/Observer.getDispatcher.js";
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
        Observable_forEach<T>(Queue_pushTo(Observer_getDispatcher(observer))),
        Observable_subscribe(scheduler),
        Disposable_bindTo(Observer_getDispatcher(observer)),
      ),
    );

export default Observable_subscribeOn;
