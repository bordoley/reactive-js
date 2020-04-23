import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces";
import { pipe } from "../../pipe";
import { zip } from "./zip";
import { createSubject } from "./subject";
import { concatAll, concatMap } from "./mergeAll";
import { compute } from "./compute";
import { skipFirst } from "./skipFirst";
import { switchAll } from "./switchAll";
import { withLatestFrom } from "./withLatestFrom";
import { map } from "./map";
import { publish } from "./publish";
import { takeLast } from "./takeLast";
import { share } from "./share";
import { concat } from "./concat";

const subscribeSwitchingMode = <T, TAcc>(
  subscriber: SubscriberLike<TAcc>,
  src: ObservableLike<T>,
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
) => {
  const accFeedbackSubject = createSubject<TAcc>(subscriber, 1);
  subscriber.add(accFeedbackSubject);

  concat(
    compute(initialValue),
    pipe(
      src,
      withLatestFrom<T, TAcc, ObservableLike<TAcc>>(
        accFeedbackSubject,
        (next, acc) => scanner(acc, next),
      ),
      switchAll<TAcc>(),
    ),
  ).subscribe(accFeedbackSubject);

  pipe(accFeedbackSubject, skipFirst()).subscribe(subscriber);
};

const subscribeQueingMode = <T, TAcc>(
  subscriber: SubscriberLike<TAcc>,
  src: ObservableLike<T>,
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
) => {
  const createGenerator = (next: T) => (acc: TAcc) => scanner(acc, next);
  const accFeedbackSubject = createSubject<TAcc>(subscriber);

  const generatorStream = pipe(src, map(createGenerator));
  const acc = pipe(
    zip([generatorStream, accFeedbackSubject], (generateNext, acc) =>
      pipe(generateNext(acc), share(subscriber)),
    ),
    publish(subscriber),
  );

  concat(compute(initialValue), pipe(acc, concatMap(takeLast()))).subscribe(
    accFeedbackSubject,
  );

  pipe(acc, concatAll()).subscribe(subscriber);

  subscriber.add(acc).add(accFeedbackSubject);
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
