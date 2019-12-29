import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
} from "./interfaces";
import { pipe } from "@reactive-js/pipe";
import { zip } from "./zip";
import { createSubject } from "./subject";
import { observe } from "./observe";
import { concatAll } from "./mergeAll";

class ScanAsyncObservable<T, TAcc> implements ObservableLike<TAcc> {
  constructor(
    private readonly source: ObservableLike<T>,
    private readonly scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
    private readonly initialValue: () => TAcc,
  ) {}

  subscribe(subscriber: SubscriberLike<TAcc>) {
    const accFeedbackSubject = createSubject(1);
    subscriber.add(accFeedbackSubject);

    pipe(
      zip([accFeedbackSubject, this.source], this.scanner as any),
      concatAll(),
      observe(accFeedbackSubject),
    ).subscribe(subscriber);

    accFeedbackSubject.onNext(this.initialValue());
  }
}

export const scanAsync = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
): ObservableOperatorLike<T, TAcc> => observable =>
  new ScanAsyncObservable(observable, scanner, initialValue);
