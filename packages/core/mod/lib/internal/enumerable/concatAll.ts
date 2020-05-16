import { compose, Function } from "../../functions.ts";
import { isNone, isSome, none, Option } from "../../option.ts";
import { enumerate } from "./enumerator.ts";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableFunction,
} from "./interfaces.ts";
import { lift } from "./lift.ts";
import { map } from "./map.ts";

class ConcatAllEnumerator<T> implements EnumeratorLike<T> {
  current = (none as unknown) as T;
  hasCurrent = false;

  private enumerator: Option<EnumeratorLike<T>> = none;

  constructor(private readonly delegate: EnumeratorLike<EnumerableLike<T>>) {}

  move(): boolean {
    this.current = (none as unknown) as T;
    this.hasCurrent = false;

    const delegate = this.delegate;
    if (isNone(this.enumerator) && delegate.move()) {
      this.enumerator = enumerate(delegate.current);
    }

    while (isSome(this.enumerator)) {
      const enumerator = this.enumerator;

      if (enumerator.move()) {
        this.current = enumerator.current;
        this.hasCurrent = true;
        break;
      } else if (delegate.move()) {
        this.enumerator = enumerate(delegate.current);
      } else {
        this.enumerator = none;
      }
    }

    return this.hasCurrent;
  }
}

const operator = <T>(enumerator: EnumeratorLike<EnumerableLike<T>>) =>
  new ConcatAllEnumerator(enumerator);

const _concatAll = lift(operator);

/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
export const concatAll = <T>(): EnumerableFunction<EnumerableLike<T>, T> =>
  _concatAll;

/**
 * Maps each item yielded by the sourc using a mapping function, then flattens the result.
 *
 * @param mapper
 */
export const concatMap = <TA, TB>(
  mapper: Function<TA, EnumerableLike<TB>>,
): EnumerableFunction<TA, TB> => compose(map(mapper), concatAll());
