import { DisposableOrTeardown, Error } from "../disposable";
import { EnumerableLike, EnumeratorLike } from "../enumerable";
import { Option } from "../option";

export const enumerate = <T>(
  enumerable: EnumerableLike<T>,
): EnumeratorLike<T> => enumerable.enumerate();

export const current = <T>(enumerator: EnumeratorLike<T>) => enumerator.current;

export const hasCurrent = <T>(enumerator: EnumeratorLike<T>) =>
  enumerator.hasCurrent;

export const move = <T>(enumerator: EnumeratorLike<T>) => enumerator.move();

export abstract class AbstractDelegatingEnumerator<TA, TB>
  implements EnumeratorLike<TB>
{
  constructor(protected readonly delegate: EnumeratorLike<TA>) {}

  abstract current: TB;

  get error() {
    return this.delegate.error;
  }

  abstract hasCurrent: boolean;

  get isDisposed() {
    return this.delegate.isDisposed;
  }

  add(disposable: DisposableOrTeardown): void {
    this.delegate.add(disposable);
  }

  dispose(error?: Option<Error>): void {
    this.delegate.dispose(error);
  }

  abstract move(): boolean;
}
