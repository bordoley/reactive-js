import { compose, Function1 } from "../../functions";
import { isNone, isSome, none, Option } from "../../option";
import { enumerate } from "./enumerator";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableOperator,
} from "../../enumerable";
import { lift } from "./lift";
import { map } from "./map";

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
export const concatAll = <T>(): EnumerableOperator<EnumerableLike<T>, T> =>
  _concatAll;

/**
 * Maps each item yielded by the sourc using a mapping function, then flattens the result.
 *
 * @param mapper
 */
export const concatMap = <TA, TB>(
  mapper: Function1<TA, EnumerableLike<TB>>,
): EnumerableOperator<TA, TB> => compose(map(mapper), concatAll());
