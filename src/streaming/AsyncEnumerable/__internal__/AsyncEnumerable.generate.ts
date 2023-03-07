import { Generate } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional_toObservable.js";
import { Factory, Updater, pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import { getDelay } from "../../../scheduling/__internal__/Scheduler.options.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";

const AsyncEnumerable_generate: Generate<
  AsyncEnumerableLike,
  { delay?: number }
>["generate"] = /*@__PURE__*/ (() => {
  const generateScanner =
    <T>(generator: Updater<T>) =>
    (acc: T, _: unknown) =>
      generator(acc);

  const asyncGeneratorScanner =
    <T>(generator: Updater<T>, options?: { delay?: number }) =>
    (acc: T, _: unknown) =>
      pipe(acc, generator, Optional_toObservable(options));

  return <T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: { delay?: number },
  ): AsyncEnumerableLike<T> => {
    const delay = getDelay(options);

    return Streamable_createLifted<T>(
      delay > 0
        ? Observable_scanAsync<void, T>(
            asyncGeneratorScanner(generator, options),
            initialValue,
          )
        : Observable_scan(generateScanner(generator), initialValue),
      true,
      false,
      false,
    );
  };
})();

export default AsyncEnumerable_generate;
