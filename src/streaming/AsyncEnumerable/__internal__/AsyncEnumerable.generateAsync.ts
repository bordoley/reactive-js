import { Factory, Function1 } from "../../../functions.js";
import { GenerateAsync, ObservableLike } from "../../../rx.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import Streamable_createLifted from "../../Streamable/__internal__/Streamable.createLifted.js";

const AsyncEnumerable_generateAsync: GenerateAsync<
  AsyncEnumerableLike,
  ObservableLike
>["generateAsync"] = <T>(
  generator: Function1<T, ObservableLike<T>>,
  initialValue: Factory<T>,
): AsyncEnumerableLike<T> =>
  Streamable_createLifted<T>(
    Observable_scanAsync<void, T>(generator, initialValue),
    true,
    false,
    false,
  );

export default AsyncEnumerable_generateAsync;
