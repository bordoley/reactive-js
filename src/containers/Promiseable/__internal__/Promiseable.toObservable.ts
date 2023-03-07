import { PromiseableLike } from "../../../containers.js";
import {
  ObservableLike,
  ObserverLike_dispatcher,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike_push,
} from "../../../util.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";

const Promiseable_toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    Observable_create(observer => {
      const dispatcher = observer[ObserverLike_dispatcher];

      promise.then(next => {
        if (!dispatcher[DisposableLike_isDisposed]) {
          dispatcher[QueueLike_push](next);
          dispatcher[DisposableLike_dispose]();
        }
      }, Disposable_toErrorHandler(dispatcher));
    });

export default Promiseable_toObservable;
