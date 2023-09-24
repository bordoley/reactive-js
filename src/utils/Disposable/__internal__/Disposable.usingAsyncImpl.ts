import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { Factory, invoke, isFunction, pipe } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";

const Disposable_usingAsyncImpl = async (
  f: (...args: DisposableLike[]) => unknown,
  factoryOrDisposables: readonly (DisposableLike | Factory<DisposableLike>)[],
): Promise<unknown> => {
  const disposables = pipe(
    factoryOrDisposables,
    ReadonlyArray.map(factoryOrDisposable =>
      isFunction(factoryOrDisposable)
        ? factoryOrDisposable()
        : factoryOrDisposable,
    ),
  );

  try {
    return await f(...disposables);
  } finally {
    pipe(disposables, ReadonlyArray.forEach(invoke(DisposableLike_dispose)));
  }
};

export default Disposable_usingAsyncImpl;
