import { EnumerableLike, EnumeratorLike } from "./interfaces.ts";

export const enumerate = <T>(
  enumerable: EnumerableLike<T>,
): EnumeratorLike<T> => enumerable.enumerate();

export const current = <T>(enumerator: EnumeratorLike<T>) => enumerator.current;

export const hasCurrent = <T>(enumerator: EnumeratorLike<T>) => enumerator.hasCurrent;

export const move = <T>(enumerator: EnumeratorLike<T>) => enumerator.move();
