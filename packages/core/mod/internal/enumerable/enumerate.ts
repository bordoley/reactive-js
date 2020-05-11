import { EnumerableLike, EnumeratorLike } from "./interfaces.ts";

export const enumerate = <T>(enumerable: EnumerableLike<T>): EnumeratorLike<T> => 
  enumerable.enumerate();