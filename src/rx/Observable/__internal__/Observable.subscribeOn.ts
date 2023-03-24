import { Factory, isFunction, pipe } from "../../../functions.js";
import { DispatcherLike_complete, ObservableLike } from "../../../rx.js";
import {
  SchedulerLike,
  SchedulerLike_requestYield,
} from "../../../scheduling.js";
import {
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "./Observable.subscribeWithMaxBufferSize.js";

const Observable_subscribeOn =
  <T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike>,
    options?: { readonly maxBufferSize?: number },
  ) =>
  (observable: ObservableLike<T>): ObservableLike<T> =>
    // FIXME: type test for VTS
    Observable_create<T>(observer => {
      const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
        : schedulerOrFactory;

      pipe(
        observable,
        Observable_forEach<ObservableLike, T>(v => {
          if (!observer[QueueableLike_push](v)) {
            scheduler[SchedulerLike_requestYield]();
          }
        }),
        Observable_subscribeWithMaxBufferSize(
          scheduler,
          options?.maxBufferSize ?? observer[QueueableLike_maxBufferSize],
        ),
        Disposable_onComplete(observer[DispatcherLike_complete], observer),
        Disposable_addTo(observer),
      );
    });

export default Observable_subscribeOn;
