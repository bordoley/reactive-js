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
  readonly isSynchronous: boolean;

  constructor(private readonly observables: readonly ObservableLike<any>[]) {
    super();
    this.isSynchronous = pipe(
      observables,
      everySatisfy(obs => obs.isSynchronous ?? false),
    );
  }

  sink(observer: Observer<readonly unknown[]>) {
    const observables = this.observables;
    const count = observables.length;

    debugger;

    if (this.isSynchronous) {
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

        if (observable.isSynchronous ?? false) {
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

export function zip<TA, TB>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
): ObservableLike<[TA, TB]>;
export function zip<TA, TB, TC>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
): ObservableLike<[TA, TB, TC]>;
export function zip<TA, TB, TC, TD>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
): ObservableLike<[TA, TB, TC, TD]>;
export function zip<TA, TB, TC, TD, TE>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
): ObservableLike<[TA, TB, TC, TD, TE]>;
export function zip<TA, TB, TC, TD, TE, TF>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
export function zip<TA, TB, TC, TD, TE, TF, TG>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: ObservableLike<TA>,
  b: ObservableLike<TB>,
  c: ObservableLike<TC>,
  d: ObservableLike<TD>,
  e: ObservableLike<TE>,
  f: ObservableLike<TF>,
  g: ObservableLike<TG>,
  h: ObservableLike<TH>,
  i: ObservableLike<TI>,
): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
export function zip(
  ...observables: readonly ObservableLike<unknown>[]
): ObservableLike<readonly unknown[]> {
  return new ZipObservable(observables);
}

export const zipT: Zip<ObservableLike<unknown>> = {
  zip,
};
