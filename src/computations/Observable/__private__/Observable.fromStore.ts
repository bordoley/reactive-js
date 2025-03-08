import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  DispatcherLike_complete,
  MulticastObservableLike,
  ObservableLike_observe,
  ObserverLike,
  StoreLike,
  StoreLike_value,
} from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import type * as Observable from "../../Observable.js";

const Observable_fromStore: Observable.Signature["fromStore"] = /*@__PURE__*/ (<
  T,
>() => {
  const FromStoreObservable_eventSource = Symbol(
    "FromStoreObservable_eventSource",
  );

  type TProperties = {
    [FromStoreObservable_eventSource]: StoreLike<T>;
  };

  return returns(
    mixInstanceFactory(
      function FromEventSourceObservable(
        instance: MulticastObservableLike<T> & TProperties,
        store: StoreLike<T>,
      ): MulticastObservableLike<T> {
        instance[FromStoreObservable_eventSource] = store;

        return instance;
      },
      props<TProperties>({
        [FromStoreObservable_eventSource]: none,
      }),
      {
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          const store = this[FromStoreObservable_eventSource];
          observer[QueueableLike_enqueue](store[StoreLike_value]);

          pipe(
            this[FromStoreObservable_eventSource],
            DisposableContainer.onComplete(
              bindMethod(observer, DispatcherLike_complete),
            ),
            DisposableContainer.onError(
              bindMethod(observer, DisposableLike_dispose),
            ),
            EventSource.addEventHandler(
              bindMethod(observer, QueueableLike_enqueue),
            ),
            Disposable.addTo(observer),
          );
        },
      },
    ),
  );
})();

export default Observable_fromStore;
