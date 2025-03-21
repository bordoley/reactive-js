import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  MulticastObservableLike,
  ObservableLike_observe,
  StoreLike,
  StoreLike_value,
} from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  ObserverLike,
  SinkLike_complete,
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
      include(DelegatingDisposableContainerMixin),
      function FromEventSourceObservable(
        this: Omit<MulticastObservableLike<T>, keyof DisposableContainerLike> &
          TProperties,
        store: StoreLike<T>,
      ): MulticastObservableLike<T> {
        this[FromStoreObservable_eventSource] = store;

        init(DelegatingDisposableContainerMixin, this, store);

        return this;
      },
      props<TProperties>({
        [FromStoreObservable_eventSource]: none,
      }),
      {
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          const store = this[FromStoreObservable_eventSource];
          observer[EventListenerLike_notify](store[StoreLike_value]);

          pipe(
            this[FromStoreObservable_eventSource],
            DisposableContainer.onComplete(
              bindMethod(observer, SinkLike_complete),
            ),
            DisposableContainer.onError(
              bindMethod(observer, DisposableLike_dispose),
            ),
            EventSource.addEventHandler(
              bindMethod(observer, EventListenerLike_notify),
            ),
            Disposable.addTo(observer),
          );
        },
      },
    ),
  );
})();

export default Observable_fromStore;
