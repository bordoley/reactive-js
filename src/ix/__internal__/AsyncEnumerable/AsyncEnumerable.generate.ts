import { Generate } from "../../../containers";
import ReadonlyArray_toRunnableObservable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable";
import { Factory, Updater, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import Observable_scan from "../../../rx/__internal__/Observable/Observable.scan";
import Observable_scanAsync from "../../../rx/__internal__/Observable/Observable.scanAsync";
import { getDelay } from "../../../scheduling/__internal__/Scheduler.options";
import AsyncEnumerable_create from "./AsyncEnumerable.create";

const AsyncEnumerable_generate: Generate<
  AsyncEnumerableLike,
  { delay?: number }
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
        ReadonlyArray_toRunnableObservable<T>(options),
      );

  return <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: { readonly delay?: number },
  ): AsyncEnumerableLike<T> => {
    const delay = getDelay(options);

    return AsyncEnumerable_create(
      delay > 0
        ? Observable_scanAsync<void, T>(
            asyncGeneratorScanner(generator, options),
            initialValue,
          )
        : Observable_scan(generateScanner(generator), initialValue),
    );
  };
})();

export default AsyncEnumerable_generate;
