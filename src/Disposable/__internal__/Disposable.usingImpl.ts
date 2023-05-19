import ReadonlyArray_forEach from "../../ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  Factory,
  SideEffect1,
  invoke,
  isFunction,
  pipe,
} from "../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../types.js";

const Disposable_usingImpl = (
  f: (...args: DisposableLike[]) => unknown,
  factoryOrDisposables: readonly (DisposableLike | Factory<DisposableLike>)[],
): unknown => {
  const disposables = pipe(
    factoryOrDisposables,
    ReadonlyArray_map(factoryOrDisposable =>
      isFunction(factoryOrDisposable)
        ? factoryOrDisposable()
        : factoryOrDisposable,
    ),
  );

  try {
    return f(...disposables);
  } finally {
    pipe(
      disposables,
      ReadonlyArray_forEach(
        invoke(DisposableLike_dispose) as SideEffect1<DisposableLike>,
      ),
    );
  }
};

export default Disposable_usingImpl;
