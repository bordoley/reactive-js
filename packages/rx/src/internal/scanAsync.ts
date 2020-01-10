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
import { ofValue } from "./ofValue";
import { skipFirst } from "./skipFirst";

class ScanAsyncObservable<T, TAcc> implements ObservableLike<TAcc> {
  constructor(
    private readonly source: ObservableLike<T>,
    private readonly scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
    private readonly initialValue: () => TAcc,
  ) {}

  subscribe(subscriber: SubscriberLike<TAcc>) {
    const accFeedbackSubject = createSubject(subscriber);
    subscriber.add(accFeedbackSubject);

    merge(
      pipe(
        zip([accFeedbackSubject, this.source], this.scanner as any),
        concatAll(),
      ),
      ofValue(this.initialValue()),
    ).subscribe(accFeedbackSubject);

    pipe(accFeedbackSubject, skipFirst()).subscribe(subscriber);
  }
}

export const scanAsync = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
): ObservableOperatorLike<T, TAcc> => observable =>
  new ScanAsyncObservable(observable, scanner, initialValue);
