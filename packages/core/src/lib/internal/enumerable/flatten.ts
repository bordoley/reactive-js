import { compose, Function } from "../../functions";
import { isNone, isSome, none, Option } from "../../option";
import { enumerate } from "./enumerator";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableFunction,
} from "./interfaces";
import { lift } from "./lift";
import { map } from "./map";

class FlattenEnumerator<T> implements EnumeratorLike<T> {
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
  new FlattenEnumerator(enumerator);

const _flatten = lift(operator);

/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
export const flatten = <T>(): EnumerableFunction<EnumerableLike<T>, T> =>
  _flatten;

/**
 * Maps each item yielded by the sourc using a mapping function, then flattens the result.
 *
 * @param mapper
 */
export const concatMap = <TA, TB>(
  mapper: Function<TA, EnumerableLike<TB>>,
): EnumerableFunction<TA, TB> => compose(map(mapper), flatten());
