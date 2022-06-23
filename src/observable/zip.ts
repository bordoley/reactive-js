import { Zip } from "../container";
import {
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
  dispose,
} from "../disposable";
import {
  AbstractEnumerator,
  Enumerator,
  current,
  zipEnumerators,
} from "../enumerable";
import { defer, pipe, returns } from "../functions";
import { ObservableLike } from "../observable";
import { everySatisfy, map } from "../readonlyArray";
import { sinkInto } from "../source";
import { fromEnumerator } from "./fromEnumerable";
import { AbstractObservable } from "./observable";
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

  constructor() {
    super();
    addTeardown(this, () => {
      //this.buffer.length = 0;
    });
  }

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

function onDisposed(this: ZipObserver) {
  const { enumerator } = this;
  if (
    enumerator.isDisposed ||
    (enumerator.buffer.length === 0 && !enumerator.hasCurrent)
  ) {
    pipe(this.delegate, dispose());
  }
}

class ZipObserver extends Observer<unknown> {
  readonly enumerator: ZipObserverEnumerator;
  constructor(
    readonly delegate: Observer<readonly unknown[]>,
    private readonly enumerators: readonly Enumerator<any>[],
  ) {
    super(delegate);

    this.enumerator = new ZipObserverEnumerator();
    addDisposableDisposeParentOnChildError(delegate, this.enumerator);
  }

  notify(next: unknown) {
    this.assertState();

    const { enumerators } = this;

    if (!this.isDisposed) {
      if (this.enumerator.hasCurrent) {
        this.enumerator.buffer.push(next);
      } else {
        this.enumerator.current = next;
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

class ZipObservable extends AbstractObservable<readonly unknown[]> {
  readonly isEnumerable: boolean;

  constructor(private readonly observables: readonly ObservableLike<any>[]) {
    super();
    this.isEnumerable = pipe(
      observables,
      everySatisfy(obs => obs.isEnumerable ?? false),
    );
  }

  sink(observer: Observer<readonly unknown[]>) {
    const observables = this.observables;
    const count = observables.length;

    debugger;

    if (this.isEnumerable) {
      const observable = using(
        defer(this.observables, map(enumerate)),
        (...enumerators: readonly Enumerator<any>[]) =>
          pipe(enumerators, zipEnumerators, returns, fromEnumerator()),
      );

      pipe(observable, sinkInto(observer));
    } else {
      const enumerators: Enumerator<unknown>[] = [];
      for (let index = 0; index < count; index++) {
        const observable = observables[index];

        if (observable.isEnumerable ?? false) {
          const enumerator = enumerate(observable);

          enumerator.move();
          enumerators.push(enumerator);
        } else {
          const innerObserver = new ZipObserver(observer, enumerators);
          addDisposableDisposeParentOnChildError(observer, innerObserver);
          addOnDisposedWithoutErrorTeardown(innerObserver, onDisposed);

          pipe(observable, sinkInto(innerObserver));
          enumerators.push(innerObserver.enumerator);
        }
      }
    }
  }
}

const _zip = (
  ...observables: readonly ObservableLike<unknown>[]
): ObservableLike<readonly unknown[]> => new ZipObservable(observables);

/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
export const zip: Zip<ObservableLike<unknown>>["zip"] = _zip;

export const zipT: Zip<ObservableLike<unknown>> = {
  zip,
};
