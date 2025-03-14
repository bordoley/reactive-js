import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventSourceLike,
  MulticastObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { bindMethod, none, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_complete,
  SinkLike_push,
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
          this: Omit<
            MulticastObservableLike<T>,
            keyof DisposableContainerLike
          > &
            TProperties,
          eventSource: EventSourceLike<T>,
        ): MulticastObservableLike<T> {
          this[FromEventSourceObservable_eventSource] = eventSource;

          init(DelegatingDisposableContainerMixin, this, eventSource);

          return this;
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
                bindMethod(observer, SinkLike_complete),
              ),
              DisposableContainer.onError(
                bindMethod(observer, DisposableLike_dispose),
              ),
              EventSource.addEventHandler(bindMethod(observer, SinkLike_push)),
              Disposable.addTo(observer),
            );
          },
        },
      ),
    );
  })();

export default Observable_fromEventSource;
