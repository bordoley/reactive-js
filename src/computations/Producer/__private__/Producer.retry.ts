import { ProducerLike, SourceLike_subscribe } from "../../../computations.js";
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
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ConsumerLike, DisposableLike_dispose } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import Producer_lift from "./Producer.lift.js";

const createRetryConsumer = <T>(
  delegate: ConsumerLike<T>,
  observable: ProducerLike<T>,
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

      const newDelegate = createRetryOnDisposedConsumer(delegate);
      pipe(observable, invoke(SourceLike_subscribe, newDelegate));
    }
  };

  const createRetryOnDisposedConsumer = compose(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
    Disposable.addToContainer(delegate),
    DisposableContainer.onError(doOnError),
  );

  return createRetryOnDisposedConsumer(delegate);
};

const Producer_retry: Producer.Signature["retry"] =
  <T>(shouldRetry: (count: number, error: Error) => boolean) =>
  (observable: ProducerLike<T>) =>
    pipe(
      createRetryConsumer,
      partial(observable, shouldRetry),
      Producer_lift(),
    )(observable);

export default Producer_retry;
