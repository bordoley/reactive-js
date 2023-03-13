import { PromiseableLike } from "../../../containers.js";
import {
  DispatcherLike_complete,
  ObservableLike,
  ObserverLike_dispatcher,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import {
  DisposableLike_isDisposed,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";

const Promiseable_toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    Observable_create(observer => {
      const dispatcher = observer[ObserverLike_dispatcher];

      promise.then(next => {
        if (!observer[DisposableLike_isDisposed]) {
          dispatcher[QueueableLike_push](next);
          dispatcher[DispatcherLike_complete]();
        }
      }, Disposable_toErrorHandler(observer));
    });

export default Promiseable_toObservable;
