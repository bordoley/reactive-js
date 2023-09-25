import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { Factory, isFunction, pipe } from "../../../functions.js";
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
    for (const disposable of disposables) {
      disposable[DisposableLike_dispose]();
    }
  }
};

export default Disposable_usingAsyncImpl;
