import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  DispatcherLike_complete,
  MulticastObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../computations.js";
import { none, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
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
        function FromPromiseObservable(
          instance: MulticastObservableLike<T> & TProperties,
          promise: Promise<T>,
        ): MulticastObservableLike<T> {
          instance[FromPromiseObservable_promise] = promise;

          return instance;
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
              if (!observer[DisposableLike_isDisposed]) {
                observer[QueueableLike_enqueue](next);
                observer[DispatcherLike_complete]();
              }
            }, Disposable.toErrorHandler(observer));
          },
        },
      ),
    );
  })();

export default Observable_fromPromise;
