import { Factory, Function1 } from "../../../functions.js";
import { GenerateLast, ObservableLike } from "../../../rx.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
import AsyncEnumerable_create from "./AsyncEnumerable.create.js";

const AsyncEnumerable_generateLast: GenerateLast<
  AsyncEnumerableLike,
  ObservableLike
>["generateLast"] = <T>(
  generator: Function1<T, ObservableLike<T>>,
  initialValue: Factory<T>,
): AsyncEnumerableLike<T> =>
  AsyncEnumerable_create<T>(
    Observable_scanLast<void, T>(generator, initialValue),
  );

export default AsyncEnumerable_generateLast;
