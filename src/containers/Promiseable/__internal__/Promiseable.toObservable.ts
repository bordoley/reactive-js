import { PromiseableLike } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike_dispatcher,
  ToObservable,
} from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";

const Promiseable_toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    Observable_create(observer => {
      const dispatcher = observer[ObserverLike_dispatcher];

      promise.then(next => {
        if (!dispatcher[DisposableLike_isDisposed]) {
          pipe(dispatcher, Queue_push(next), Disposable_dispose());
        }
      }, Disposable_toErrorHandler(dispatcher));
    });

export default Promiseable_toObservable;
