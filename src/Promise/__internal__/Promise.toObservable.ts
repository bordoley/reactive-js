import Disposable_toErrorHandler from "../../Disposable/__internal__/Disposable.toErrorHandler.js";
import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import type * as Promise from "../../Promise.js";
import {
  DispatcherLike_complete,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../types.js";

const Promise_toObservable: Promise.Signature["toObservable"] =
  <T>() =>
  (promise: PromiseLike<T>) =>
    MulticastObservable_create<T>(observer => {
      promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
          observer[QueueableLike_enqueue](next);
          observer[DispatcherLike_complete]();
        }
      }, Disposable_toErrorHandler(observer));
    });

export default Promise_toObservable;
