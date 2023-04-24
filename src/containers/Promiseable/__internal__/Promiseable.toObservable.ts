import { PromiseableLike } from "../../../containers.js";
import { ObservableLike, ToObservable } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import {
  DispatcherLike_complete,
  DisposableLike_isDisposed,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";

const Promiseable_toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    Observable_create(observer => {
      promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
          observer[QueueableLike_enqueue](next);
          observer[DispatcherLike_complete]();
        }
      }, Disposable_toErrorHandler(observer));
    });

export default Promiseable_toObservable;
