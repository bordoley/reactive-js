import { EnumerableLike, EnumeratorLike } from "./interfaces";

export const enumerate = <T>(
  enumerable: EnumerableLike<T>,
): EnumeratorLike<T> => enumerable.enumerate();
