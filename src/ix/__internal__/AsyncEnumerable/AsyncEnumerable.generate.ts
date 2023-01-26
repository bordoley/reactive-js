import { Generate } from "../../../containers";
import ReadonlyArray$toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Factory, Updater, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import Observable$scan from "../../../rx/__internal__/Observable/Observable.scan";
import Observable$scanAsync from "../../../rx/__internal__/Observable/Observable.scanAsync";
import { getDelay } from "../../../scheduling/__internal__/Scheduler.options";
import AsyncEnumerable$create from "./AsyncEnumerable.create";

const AsyncEnumerable$generate: Generate<
  AsyncEnumerableLike,
  { delay: number }
>["generate"] = /*@__PURE__*/ (() => {
  const generateScanner =
    <T>(generator: Updater<T>) =>
    (acc: T, _: unknown) =>
      generator(acc);

  const asyncGeneratorScanner =
    <T>(generator: Updater<T>, options?: { readonly delay?: number }) =>
    (acc: T, _: unknown) =>
      pipe(
        acc,
        generator,
        x => [x],
        ReadonlyArray$toRunnableObservable<T>(options),
      );

  return <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: { readonly delay?: number },
  ): AsyncEnumerableLike<T> => {
    const delay = getDelay(options);

    return AsyncEnumerable$create(
      delay > 0
        ? Observable$scanAsync<void, T>(
            asyncGeneratorScanner(generator, options),
            initialValue,
          )
        : Observable$scan(generateScanner(generator), initialValue),
    );
  };
})();

export default AsyncEnumerable$generate;
