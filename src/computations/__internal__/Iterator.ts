import { Function1, isFunction } from "../../functions.js";

export const toGenerator: <T>() => Function1<Iterator<T>, Generator<T, void, unknown>> = <T>() =>
  (iterator: Iterator<T>) =>
    (function* () {
      let result: IteratorResult<T>;

      try {
        result = iterator.next();
        while (!result.done) {
          yield result.value;
          result = iterator.next();
        }
      } finally {
        if (isFunction(iterator.return)) {
          iterator.return();
        }
      }
    })();

export const toAsyncGenerator: <T>() => Function1<
  Iterator<T>,
  AsyncGenerator<Awaited<T>, void, unknown>
> =
  <T>() =>
  (iterator: Iterator<T>) =>
    (async function* () {
      let result: IteratorResult<T>;

      try {
        result = iterator.next();
        while (!result.done) {
          yield Promise.resolve(result.value);
          result = iterator.next();
        }
      } finally {
        if (isFunction(iterator.return)) {
          iterator.return();
        }
      }
    })();
