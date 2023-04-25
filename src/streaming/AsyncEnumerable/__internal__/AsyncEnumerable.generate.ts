import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Factory, Updater, pipe } from "../../../functions.js";
import { Generate } from "../../../rx.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_create from "./AsyncEnumerable.create.js";
import AsyncEnumerable_generateLast from "./AsyncEnumerable.generateLast.js";

const AsyncEnumerable_generate: Generate<AsyncEnumerableLike>["generate"] =
  /*@__PURE__*/ (() => {
    const generateScanner =
      <T>(generator: Updater<T>) =>
      (acc: T, _: unknown) =>
        generator(acc);

    const asyncGeneratorScanner =
      <T>(generator: Updater<T>, options?: { readonly delay?: number }) =>
      (acc: T) =>
        pipe(acc, generator, Optional_toObservable(options));

    return <T>(
      generator: Updater<T>,
      initialValue: Factory<T>,
      options?: { readonly delay?: number },
    ): AsyncEnumerableLike<T> => {
      const { delay = 0 } = options ?? {};

      return delay > 0
        ? AsyncEnumerable_generateLast(
            asyncGeneratorScanner(generator, options),
            initialValue,
          )
        : AsyncEnumerable_create<T>(
            Observable_scan(generateScanner(generator), initialValue),
          );
    };
  })();

export default AsyncEnumerable_generate;
