import { getDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { Generate } from "../../../containers";
import ReadonlyArrayLike__toRunnableObservable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import { Factory, Updater, pipe } from "../../../functions";
import { AsyncEnumerableLike } from "../../../ix";
import ObservableLike__scan from "../../../rx/__internal__/ObservableLike/ObservableLike.scan";
import ObservableLike__scanAsync from "../../../rx/__internal__/ObservableLike/ObservableLike.scanAsync";
import AsyncEnumerableLike__create from "./AsyncEnumerableLike.create";

const AsyncEnumerableLike__generate: Generate<
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
        ReadonlyArrayLike__toRunnableObservable<T>(options),
      );

  return <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: { readonly delay?: number },
  ): AsyncEnumerableLike<T> => {
    const delay = getDelay(options);

    return AsyncEnumerableLike__create(
      delay > 0
        ? ObservableLike__scanAsync<void, T>(
            asyncGeneratorScanner(generator, options),
            initialValue,
          )
        : ObservableLike__scan(generateScanner(generator), initialValue),
    );
  };
})();

export default AsyncEnumerableLike__generate;
