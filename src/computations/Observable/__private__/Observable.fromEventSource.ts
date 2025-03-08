import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  DispatcherLike_complete,
  EventSourceLike,
  MulticastObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import type * as Observable from "../../Observable.js";

const Observable_fromEventSource: Observable.Signature["fromEventSource"] =
  /*@__PURE__*/ (<T>() => {
    const FromEventSourceObservable_eventSource = Symbol(
      "FromEventSourceObservable_eventSource",
    );

    type TProperties = {
      [FromEventSourceObservable_eventSource]: EventSourceLike<T>;
    };

    return returns(
      mixInstanceFactory(
        include(DelegatingDisposableContainerMixin),
        function FromEventSourceObservable(
          instance: Omit<
            MulticastObservableLike<T>,
            keyof DisposableContainerLike
          > &
            TProperties,
          eventSource: EventSourceLike<T>,
        ): MulticastObservableLike<T> {
          instance[FromEventSourceObservable_eventSource] = eventSource;

          init(DelegatingDisposableContainerMixin, instance, eventSource);

          return instance;
        },
        props<TProperties>({
          [FromEventSourceObservable_eventSource]: none,
        }),
        {
          [ComputationLike_isDeferred]: false as const,
          [ComputationLike_isSynchronous]: false as const,

          [ObservableLike_observe](
            this: TProperties,
            observer: ObserverLike<T>,
          ) {
            pipe(
              this[FromEventSourceObservable_eventSource],
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

export default Observable_fromEventSource;
