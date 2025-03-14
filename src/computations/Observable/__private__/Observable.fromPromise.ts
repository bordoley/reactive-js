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
} from "../../../computations.js";
import { bindMethod, none, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  ObserverLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";

const Observable_fromPromise: Observable.Signature["fromPromise"] =
  /*@__PURE__*/ (<T>() => {
    const FromPromiseObservable_promise = Symbol(
      "FromPromiseObservable_promise",
    );

    type TProperties = {
      [FromPromiseObservable_promise]: Promise<T>;
    };

    return returns(
      mixInstanceFactory(
        include(DelegatingDisposableContainerMixin),
        function FromPromiseObservable(
          this: Omit<
            MulticastObservableLike<T>,
            keyof DisposableContainerLike
          > &
            TProperties,
          promise: Promise<T>,
        ): MulticastObservableLike<T> {
          this[FromPromiseObservable_promise] = promise;

          const disposable = Disposable.create();
          init(DelegatingDisposableContainerMixin, this, disposable);

          promise
            .catch(Disposable.toErrorHandler(disposable))
            .finally(bindMethod(disposable, DisposableLike_dispose));

          return this;
        },
        props<TProperties>({
          [FromPromiseObservable_promise]: none,
        }),
        {
          [ComputationLike_isDeferred]: false as const,
          [ComputationLike_isSynchronous]: false as const,

          [ObservableLike_observe](
            this: TProperties,
            observer: ObserverLike<T>,
          ) {
            this[FromPromiseObservable_promise].then(next => {
              if (!observer[SinkLike_isCompleted]) {
                observer[EventListenerLike_notify](next);
                observer[SinkLike_complete]();
              }
            }, Disposable.toErrorHandler(observer));
          },
        },
      ),
    );
  })();

export default Observable_fromPromise;
