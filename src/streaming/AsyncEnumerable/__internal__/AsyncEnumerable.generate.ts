import { Generate } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Factory, Updater, pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";
import AsyncEnumerable_generateLast from "./AsyncEnumerable.generateLast.js";

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
      : Streamable_createLifted<T>(
          Observable_scan(generateScanner(generator), initialValue),
          true,
          true,
          true,
        );
  };
})();

export default AsyncEnumerable_generate;
