import Disposable_toErrorHandler from "../../Disposable/__internal__/Disposable.toErrorHandler.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import { Containers, PromiseContainer } from "../../containers.js";
import {
  DispatcherLike_complete,
  DisposableLike_isDisposed,
  ObservableLike,
  QueueableLike_enqueue,
} from "../../types.js";

const Promise_toObservable: Containers.TypeClass<PromiseContainer>["toObservable"] =

    <T>() =>
    (promise: PromiseLike<T>): ObservableLike<T> =>
      Observable_create(observer => {
        promise.then(next => {
          if (!observer[DisposableLike_isDisposed]) {
            observer[QueueableLike_enqueue](next);
            observer[DispatcherLike_complete]();
          }
        }, Disposable_toErrorHandler(observer));
      });

export default Promise_toObservable;
