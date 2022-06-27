import { Zip } from "../container";
import { addTo, dispose, onComplete, onDisposed } from "../disposable";
import {
  AbstractEnumerator,
  Enumerator,
  current,
  zipEnumerators,
} from "../enumerable";
import { defer, pipe, returns } from "../functions";
import { ObservableLike } from "../observable";
import { everySatisfy, map } from "../readonlyArray";
import { sinkInto, sourceFrom } from "../source";
import { createObservable } from "./createObservable";
import { fromEnumerator } from "./fromEnumerable";
import { Observer } from "./observer";
import { enumerate } from "./toEnumerable";

import { using } from "./using";

const shouldEmit = (enumerators: readonly Enumerator<unknown>[]) => {
  for (const enumerator of enumerators) {
    if (!enumerator.hasCurrent) {
      return false;
    }
  }
  return true;
};

const shouldComplete = (enumerators: readonly Enumerator<unknown>[]) => {
  for (const enumerator of enumerators) {
    enumerator.move();
    if (enumerator.isDisposed && !enumerator.hasCurrent) {
      return true;
    }
  }
  return false;
};

class ZipObserverEnumerator extends AbstractEnumerator<unknown> {
  readonly buffer: unknown[] = [];

  move(): boolean {
    const { buffer } = this;

    if (!this.isDisposed && buffer.length > 0) {
      const next = buffer.shift();
      this.current = next;
    } else {
      this.reset();
    }

    return this.hasCurrent;
  }
}

class ZipObserver extends Observer<unknown> {
  constructor(
    readonly delegate: Observer<readonly unknown[]>,
    private readonly enumerators: readonly Enumerator<any>[],
    readonly enumerator: ZipObserverEnumerator,
  ) {
    super(delegate.scheduler);
  }

  notify(next: unknown) {
    this.assertState();

    const { enumerator, enumerators } = this;

    if (!this.isDisposed) {
      if (enumerator.hasCurrent) {
        enumerator.buffer.push(next);
      } else {
        enumerator.current = next;
      }

      if (shouldEmit(enumerators)) {
        const next = pipe(enumerators, map(current));
        const shouldCompleteResult = shouldComplete(enumerators);

        this.delegate.notify(next);

        if (shouldCompleteResult) {
          pipe(this, dispose());
        }
      }
    }
  }
}

const _zip = (
  ...observables: readonly ObservableLike<unknown>[]
): ObservableLike<readonly unknown[]> => {
  const isEnumerable = pipe(
    observables,
    everySatisfy(obs => obs.isEnumerable ?? false),
  );

  const zipObservable = createObservable(observer => {
    const count = observables.length;

    if (isEnumerable) {
      const zipped = using(
        defer(observables, map(enumerate)),
        (...enumerators: readonly Enumerator<any>[]) =>
          pipe(enumerators, zipEnumerators, returns, fromEnumerator()),
      );
      (zipped as any).isEnumerable = true;

      pipe(zipped, sinkInto(observer));
    } else {
      const enumerators: Enumerator<unknown>[] = [];
      for (let index = 0; index < count; index++) {
        const next = observables[index];

        if (next.isEnumerable ?? false) {
          const enumerator = enumerate(next);

          enumerator.move();
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(
            new ZipObserverEnumerator(),
            onDisposed(() => {
              enumerator.buffer.length = 0;
            }),
            addTo(observer),
          );

          const innerObserver = pipe(
            new ZipObserver(observer, enumerators, enumerator),
            onComplete(() => {
              if (
                enumerator.isDisposed ||
                (enumerator.buffer.length === 0 && !enumerator.hasCurrent)
              ) {
                pipe(observer, dispose());
              }
            }),
            addTo(observer),
            sourceFrom(next),
          );

          enumerators.push(innerObserver.enumerator);
        }
      }
    }
  });

  (zipObservable as any).isEnumerable = isEnumerable;

  return zipObservable;
};

/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
export const zip: Zip<ObservableLike<unknown>>["zip"] = _zip;

export const zipT: Zip<ObservableLike<unknown>> = {
  zip,
};
