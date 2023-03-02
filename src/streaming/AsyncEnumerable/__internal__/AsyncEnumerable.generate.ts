import { Generate } from "../../../containers.js";
import ReadonlyArray_tobservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Factory, Updater, pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import { getDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_create from "./AsyncEnumerable.create.js";

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
      pipe(acc, generator, x => [x], ReadonlyArray_tobservable<T>(options));

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
