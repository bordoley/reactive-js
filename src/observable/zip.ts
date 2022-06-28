import { Zip } from "../container";
import {
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../disposable";
import {
  AbstractEnumerator,
  Enumerator,
  current,
  hasCurrent,
  move,
  zip as zipEnumerators,
} from "../enumerator";
import { defer, pipe, returns } from "../functions";
import { ObservableLike } from "../observable";
import { everySatisfy, map } from "../readonlyArray";
import { sinkInto, sourceFrom } from "../source";
import { createObservable } from "./createObservable";
import { fromEnumerator } from "./fromEnumerable";
import { Observer } from "./observer";
import { enumerateObs } from "./toEnumerable";

import { using } from "./using";

const shouldEmit = (enumerators: readonly Enumerator<unknown>[]) => {
  for (const enumerator of enumerators) {
    if (!hasCurrent(enumerator)) {
      return false;
    }
  }
  return true;
};

const shouldComplete = (enumerators: readonly Enumerator<unknown>[]) => {
  for (const enumerator of enumerators) {
    move(enumerator);
    if (isDisposed(enumerator) && !hasCurrent(enumerator)) {
      return true;
    }
  }
  return false;
};

class ZipObserverEnumerator extends AbstractEnumerator<unknown> {
  readonly buffer: unknown[] = [];

  move(): boolean {
    const { buffer } = this;

    if (!isDisposed(this) && buffer.length > 0) {
      const next = buffer.shift();
      this.current = next;
    } else {
      this.reset();
    }

    return hasCurrent(this);
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

    if (!isDisposed(this)) {
      if (hasCurrent(enumerator)) {
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
        defer(observables, map(enumerateObs)),
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
          const enumerator = enumerateObs(next);

          move(enumerator);
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
                isDisposed(enumerator) ||
                (enumerator.buffer.length === 0 && !hasCurrent(enumerator))
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
