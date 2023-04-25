import { Generate } from "../../../rx.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Factory, Updater, pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import {
  AsyncEnumerableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import Streamable_createWithConfig from "../../Streamable/__internal__/Streamable.createWithConfig.js";
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
        : Streamable_createWithConfig<T>(
            Observable_scan(generateScanner(generator), initialValue),
            {
              [StreamableLike_isEnumerable]: true,
              [StreamableLike_isInteractive]: true,
              [StreamableLike_isRunnable]: true,
            },
          );
    };
  })();

export default AsyncEnumerable_generate;
