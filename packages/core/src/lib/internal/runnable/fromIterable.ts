import {
  fromIterable as fromIterableEnumerable,
  fromIterator as fromIteratorEnumerable,
} from "../../enumerable";
import { fromEnumerable } from "./fromEnumerable";
import { RunnableLike } from "./interfaces";
import { Factory, pipe } from "../../functions";

export const fromIterator = <T, TReturn = any, TNext = unknown>(
  f: Factory<Iterator<T, TReturn, TNext>>,
): RunnableLike<T> => pipe(f, fromIteratorEnumerable, fromEnumerable);

export const fromIterable = <T>(iterable: Iterable<T>): RunnableLike<T> =>
  pipe(iterable, fromIterableEnumerable, fromEnumerable);
