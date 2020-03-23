import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { pipe } from "@reactive-js/pipe";
import { zip } from "./zip";
import { createSubject } from "./subject";
import { concatAll } from "./mergeAll";
import { merge } from "./merge";
import { enumerate } from "./observable";
import { ofValue } from "./ofValue";
import { skipFirst } from "./skipFirst";

class ScanAsyncObservable<T, TAcc> implements ObservableLike<TAcc> {
  readonly enumerate = enumerate;
  readonly isSynchronous = false;

  constructor(
    private readonly source: ObservableLike<T>,
    private readonly scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
    private readonly initialValue: () => TAcc,
  ) {}

  subscribe(subscriber: SubscriberLike<TAcc>) {
    const accFeedbackSubject = createSubject<TAcc>(subscriber);
    subscriber.add(accFeedbackSubject);

    merge(
      pipe(
        zip<TAcc, T, ObservableLike<TAcc>>(
          [accFeedbackSubject, this.source],
          this.scanner as any,
        ),
        concatAll<TAcc>(),
      ),
      ofValue(this.initialValue()),
    ).subscribe(accFeedbackSubject);

    pipe(accFeedbackSubject, skipFirst()).subscribe(subscriber);
  }
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
): ObservableOperatorLike<T, TAcc> => observable =>
  new ScanAsyncObservable(observable, scanner, initialValue);
