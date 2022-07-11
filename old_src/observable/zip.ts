import { getDelegate } from "../__internal__.delegating";
import {
  AbstractEnumerator,
  reset,
  zip as zipEnumerators,
} from "../__internal__.enumerator";
import { everySatisfy, map } from "../__internal__.readonlyArray";
import { Zip } from "../container";
import {
  addTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../disposable";
import { EnumeratorLike, getCurrent, hasCurrent, move } from "../enumerator";

import {
  getLength,
  isEmpty,
  newInstanceWith,
  pipe,
  pipeLazy,
  returns,
} from "../functions";
import { ObservableLike } from "../observable";
import { ObserverLike } from "../observer";
import { sourceFrom } from "../reactiveContainer";
import { notify } from "../reactiveSink";
import { createObservable } from "./createObservable";
import { fromEnumerator } from "./fromEnumerable";
import { isEnumerable, tagObservableType } from "./observable";
import { AbstractDelegatingObserver } from "./observer";
import { enumerateObs } from "./toEnumerable";
import { using } from "./using";

const shouldEmit = (enumerators: readonly EnumeratorLike<unknown>[]) => {
  for (const enumerator of enumerators) {
    if (!hasCurrent(enumerator)) {
      return false;
    }
  }
  return true;
};

const shouldComplete = (enumerators: readonly EnumeratorLike<unknown>[]) => {
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

    if (!isDisposed(this) && getLength(buffer) > 0) {
      const next = buffer.shift();
      this.current = next;
    } else {
      reset(this);
    }

    return hasCurrent(this);
  }
}

class ZipObserver extends AbstractDelegatingObserver<
  unknown,
  readonly unknown[]
> {
  constructor(
    delegate: ObserverLike<readonly unknown[]>,
    private readonly enumerators: readonly EnumeratorLike<any>[],
    readonly enumerator: ZipObserverEnumerator,
  ) {
    super(delegate);
  }

  notify(next: unknown) {
    const { enumerator, enumerators } = this;

    if (!isDisposed(this)) {
      if (hasCurrent(enumerator)) {
        enumerator.buffer.push(next);
      } else {
        enumerator.current = next;
      }

      if (shouldEmit(enumerators)) {
        const next = pipe(enumerators, map(getCurrent));
        const shouldCompleteResult = shouldComplete(enumerators);

        pipe(this, getDelegate, notify(next));

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
  const isEnumerableTag = pipe(observables, everySatisfy(isEnumerable));

  return isEnumerableTag
    ? pipe(
        using(
          pipeLazy(observables, map(enumerateObs)),
          (...enumerators: readonly EnumeratorLike<any>[]) =>
            pipe(zipEnumerators(...enumerators), returns, fromEnumerator()),
        ),
        tagObservableType(2),
      )
    : createObservable(observer => {
        const count = getLength(observables);
        const enumerators: EnumeratorLike<unknown>[] = [];
        for (let index = 0; index < count; index++) {
          const next = observables[index];

          if (isEnumerable(next)) {
            const enumerator = enumerateObs(next);

            move(enumerator);
            enumerators.push(enumerator);
          } else {
            const enumerator = pipe(
              ZipObserverEnumerator,
              newInstanceWith(),
              onDisposed(() => {
                enumerator.buffer.length = 0;
              }),
              addTo(observer),
            );

            const innerObserver = pipe(
              ZipObserver,
              newInstanceWith(observer, enumerators, enumerator),
              onComplete(() => {
                if (
                  isDisposed(enumerator) ||
                  (isEmpty(enumerator.buffer) && !hasCurrent(enumerator))
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
      });
};

/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
export const zip: Zip<ObservableLike<unknown>>["zip"] = _zip;

export const zipT: Zip<ObservableLike<unknown>> = {
  zip,
};
