import {
  Function1,
  Optional,
  error,
  newInstance,
  none,
} from "../../functions.js";

class RepeatOrRetryAsyncIterable<T> {
  constructor(
    readonly iterable: AsyncIterable<T>,
    readonly shouldRepeat: (count: number, error?: Error) => boolean,
  ) {}

  [Symbol.asyncIterator]() {
    const iter = this.iterable;
    const shouldRepeat = this.shouldRepeat;

    async function* foo() {
      let cnt = 0;
      let err: Optional<Error> = none;
      do {
        err = none;

        try {
          for await (const next of iter) {
            yield next;
          }
        } catch (e) {
          err = error(e);
        }
        cnt++;
      } while (shouldRepeat(cnt, err));
    }

    return foo();
  }
}

const AsyncIterable_repeatOrRetry: <T>(
  shouldRepeat: (count: number, error?: Error) => boolean,
) => Function1<AsyncIterable<T>, AsyncIterable<T>> = shouldRepeat => iterable =>
  newInstance(RepeatOrRetryAsyncIterable, iterable, shouldRepeat);

export default AsyncIterable_repeatOrRetry;
