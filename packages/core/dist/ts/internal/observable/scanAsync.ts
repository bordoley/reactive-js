import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
} from "./interfaces.ts";
import { pipe } from "../../pipe.ts";
import { zip } from "./zip.ts";
import { createSubject } from "./createSubject.ts";
import { concatAll, concatMap } from "./mergeAll.ts";
import { compute } from "./compute.ts";
import { skipFirst } from "./skipFirst.ts";
import { switchAll } from "./switchAll.ts";
import { withLatestFrom } from "./withLatestFrom.ts";
import { map } from "./map.ts";
import { publish } from "./publish.ts";
import { takeLast } from "./takeLast.ts";
import { share } from "./share.ts";
import { concat } from "./concat.ts";
import { onNotify } from "./onNotify.ts";
import { subscribe } from "./subscribe.ts";

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
        compute(initialValue),
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
    ),
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
  const acc = pipe(
    zip([generatorStream, accFeedbackStream], (generateNext, acc) =>
      pipe(generateNext(acc), share(subscriber)),
    ),
    publish(subscriber),
  );

  subscriber.add(
    pipe(
      concat(compute(initialValue), pipe(acc, concatMap(takeLast()))),
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
