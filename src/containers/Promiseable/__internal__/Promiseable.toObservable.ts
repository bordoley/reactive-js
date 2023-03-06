import { PromiseableLike } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import { ObservableLike, ToObservable } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observer_getDispatcher from "../../../rx/Observer/__internal__/Observer.getDispatcher.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";

const Promiseable_toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    Observable_create(observer => {
      const dispatcher = Observer_getDispatcher(observer);

      promise.then(next => {
        if (!dispatcher[DisposableLike_isDisposed]) {
          pipe(dispatcher, Queue_push(next), Disposable_dispose());
        }
      }, Disposable_toErrorHandler(dispatcher));
    });

export default Promiseable_toObservable;
