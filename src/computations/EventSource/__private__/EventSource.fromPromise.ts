import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../computations.js";
import { bindMethod, none, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";

const EventSource_fromPromise: EventSource.Signature["fromPromise"] =
  /*@__PURE__*/ (<T>() => {
    const FromPromiseEventSource_promise = Symbol(
      "FromPromiseEventSource_promise",
    );

    type TProperties<T> = {
      [FromPromiseEventSource_promise]: Promise<T>;
    };

    return returns(
      mixInstanceFactory(
        include(DelegatingDisposableContainerMixin),
        function FromPromiseEventSource(
          instance: TProperties<T> &
            Omit<EventSourceLike<T>, keyof DisposableContainerLike>,
          promise: Promise<T>,
        ): EventSourceLike<T> {
          instance[FromPromiseEventSource_promise] = promise;

          const disposable = Disposable.create();
          init(DelegatingDisposableContainerMixin, instance, disposable);

          promise
            .catch(Disposable.toErrorHandler(disposable))
            .finally(bindMethod(disposable, DisposableLike_dispose));

          return instance;
        },
        props<TProperties<T>>({
          [FromPromiseEventSource_promise]: none,
        }),
        {
          [ComputationLike_isDeferred]: false as const,
          [ComputationLike_isSynchronous]: false as const,

          [EventSourceLike_addEventListener](
            this: TProperties<T>,
            listener: EventListenerLike<T>,
          ): void {
            const promise = this[FromPromiseEventSource_promise];
            promise.then(next => {
              if (!listener[DisposableLike_isDisposed]) {
                listener[EventListenerLike_notify](next);
                listener[DisposableLike_dispose]();
              }
            }, Disposable.toErrorHandler(listener));
          },
        },
      ),
    );
  })() as EventSource.Signature["merge"];

export default EventSource_fromPromise;
