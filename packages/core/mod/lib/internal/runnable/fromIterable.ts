import {
  fromIterable as fromIterableEnumerable,
  fromIterator as fromIteratorEnumerable,
} from "../../enumerable.ts";
import { fromEnumerable } from "./fromEnumerable.ts";
import { RunnableLike } from "./interfaces.ts";
import { Factory, pipe } from "../../functions.ts";

export const fromIterator = <T, TReturn = any, TNext = unknown>(
  f: Factory<Iterator<T, TReturn, TNext>>,
): RunnableLike<T> => pipe(f, fromIteratorEnumerable, fromEnumerable);

export const fromIterable = <T>(iterable: Iterable<T>): RunnableLike<T> =>
  pipe(iterable, fromIterableEnumerable, fromEnumerable);
