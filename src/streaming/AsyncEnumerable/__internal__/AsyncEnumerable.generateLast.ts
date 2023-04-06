import { Factory, Function1 } from "../../../functions.js";
import { GenerateLast, ObservableLike } from "../../../rx.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import {
  AsyncEnumerableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import Streamable_createWithConfig from "../../Streamable/__internal__/Streamable.createWithConfig.js";

const AsyncEnumerable_generateLast: GenerateLast<
  AsyncEnumerableLike,
  ObservableLike
>["generateLast"] = <T>(
  generator: Function1<T, ObservableLike<T>>,
  initialValue: Factory<T>,
): AsyncEnumerableLike<T> =>
  Streamable_createWithConfig<T>(
    Observable_scanLast<void, T>(generator, initialValue),
    {
      [StreamableLike_isEnumerable]: false,
      [StreamableLike_isInteractive]: true,
      [StreamableLike_isRunnable]: false,
    },
  );

export default AsyncEnumerable_generateLast;
