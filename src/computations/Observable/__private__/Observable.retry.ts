import { ObservableLike, SourceLike_subscribe } from "../../../computations.js";
import {
  compose,
  error,
  invoke,
  isSome,
  partial,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import { DisposableLike_dispose, ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lift from "./Observable.lift.js";

const createRetryObserver = <T>(
  delegate: ObserverLike<T>,
  observable: ObservableLike<T>,
  retryPredicate: (count: number, error: Error) => boolean,
) => {
  let count = 1;

  const doOnError = (err: Error) => {
    let shouldRetry = false;
    try {
      shouldRetry = !retryPredicate(count, err);
    } catch (e) {
      shouldRetry = false;
      err = isSome(err) ? error([error(e), err]) : error(e);
    }

    if (!shouldRetry) {
      delegate[DisposableLike_dispose](err);
    } else {
      count++;

      const newDelegate = createRetryOnDisposedObserver(delegate);
      pipe(observable, invoke(SourceLike_subscribe, newDelegate));
    }
  };

  const createRetryOnDisposedObserver = compose(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
    Disposable.addToContainer(delegate),
    DisposableContainer.onError(doOnError),
  );

  return createRetryOnDisposedObserver(delegate);
};

const Observable_retry: Observable.Signature["retry"] =
  <T>(shouldRetry: (count: number, error: Error) => boolean) =>
  (observable: ObservableLike<T>) =>
    pipe(
      createRetryObserver,
      partial(observable, shouldRetry),
      Observable_lift(),
    )(observable);

export default Observable_retry;
