import { Zip } from "../container";
import { addTo } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { pipe } from "../functions";
import { everySatisfy, forEach, map } from "../readonlyArray";
import { createEnumerable } from "./enumerable";
import {
  AbstractEnumerator,
  Enumerator,
  current,
  enumerate,
  hasCurrent,
} from "./enumerator";

const moveAll = (enumerators: readonly Enumerator<any>[]) => {
  for (const enumerator of enumerators) {
    enumerator.move();
  }
};

const allHaveCurrent = (enumerators: readonly Enumerator<any>[]) =>
  pipe(enumerators, everySatisfy(hasCurrent));

class ZipEnumerator<T> extends AbstractEnumerator<readonly T[]> {
  constructor(private readonly enumerators: readonly Enumerator<T>[]) {
    super();
  }

  move(): boolean {
    this.reset();

    if (!this.isDisposed) {
      const { enumerators } = this;
      moveAll(enumerators);

      if (allHaveCurrent(enumerators)) {
        this.current = pipe(enumerators, map(current));
      } else {
        this.dispose();
      }
    }

    return this.hasCurrent;
  }
}

export const zipEnumerators = <T>(
  enumerators: readonly Enumerator<T>[],
): Enumerator<readonly T[]> => {
  const enumerator = new ZipEnumerator(enumerators);
  pipe(enumerators, forEach(addTo(enumerator)));
  return enumerator;
};

/**
 * Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
 * in order, of each of its inputs.
 */
const _zip = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<any> =>
  createEnumerable(() => pipe(enumerables, map(enumerate), zipEnumerators));

export const zip: Zip<EnumerableLike<unknown>>["zip"] = _zip;

export const zipT: Zip<EnumerableLike<unknown>> = {
  zip,
};
