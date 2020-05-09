import { pipe } from "../../functions";
import { compute } from "./compute";
import { concat } from "./concat";
import { createSubject } from "./createSubject";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces";
import { map } from "./map";
import { concatAll, concatMap } from "./mergeAll";
import { onNotify } from "./onNotify";
import { publish } from "./publish";
import { share } from "./share";
import { skipFirst } from "./skipFirst";
import { subscribe } from "./subscribe";
import { switchAll } from "./switchAll";
import { takeLast } from "./takeLast";
import { withLatestFrom } from "./withLatestFrom";
import { zip } from "./zip";

const subscribeSwitchingMode = <T, TAcc>(
  subscriber: SubscriberLike<TAcc>,
  src: ObservableLike<T>,
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
) => {
  const accFeedbackStream = createSubject<TAcc>(1);
  subscriber.add(accFeedbackStream);

  subscriber.add(
    pipe(
      concat(
        compute<TAcc>()(initialValue),
        pipe(
          src,
          withLatestFrom<T, TAcc, ObservableLike<TAcc>>(
            accFeedbackStream,
            (next, acc) => scanner(acc, next),
          ),
          switchAll<TAcc>(),
        ),
      ),
      onNotify(next => accFeedbackStream.dispatch(next)),
      subscribe(subscriber),
    ).add(accFeedbackStream),
  );

  pipe(accFeedbackStream, skipFirst()).subscribe(subscriber);
};

const subscribeQueingMode = <T, TAcc>(
  subscriber: SubscriberLike<TAcc>,
  src: ObservableLike<T>,
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
) => {
  const createGenerator = (next: T) => (acc: TAcc) => scanner(acc, next);
  const accFeedbackStream = createSubject<TAcc>();

  const generatorStream = pipe(src, map(createGenerator));
  const zipSelector = (
    generateNext: (acc: TAcc) => ObservableLike<TAcc>,
    acc: TAcc,
  ) => pipe(acc, generateNext, share(subscriber));

  const acc = pipe(
    zip([generatorStream, accFeedbackStream], zipSelector),
    publish(subscriber),
  );

  subscriber.add(
    pipe(
      concat(compute<TAcc>()(initialValue), pipe(acc, concatMap(takeLast()))),
      onNotify(next => accFeedbackStream.dispatch(next)),
      subscribe(subscriber),
    ),
  );

  pipe(acc, concatAll()).subscribe(subscriber);

  subscriber.add(acc).add(accFeedbackStream);
};

class ScanAsyncObservable<T, TAcc> implements ObservableLike<TAcc> {
  readonly isSynchronous = false;

  constructor(
    private readonly src: ObservableLike<T>,
    private readonly scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
    private readonly initialValue: () => TAcc,
    private readonly mode: ScanAsyncMode,
  ) {}

  subscribe(subscriber: SubscriberLike<TAcc>) {
    const src = this.src;
    const scanner = this.scanner;
    const initialValue = this.initialValue;
    switch (this.mode) {
      case ScanAsyncMode.Switching:
        return subscribeSwitchingMode(subscriber, src, scanner, initialValue);
      case ScanAsyncMode.Queuing:
        return subscribeQueingMode(subscriber, src, scanner, initialValue);
    }
  }
}

export const enum ScanAsyncMode {
  Switching = 1,
  Queuing = 2,
}

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
  mode = ScanAsyncMode.Queuing,
): ObservableOperator<T, TAcc> => observable =>
  new ScanAsyncObservable(observable, scanner, initialValue, mode);
