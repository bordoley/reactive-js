import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { Factory, pipe } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";

const Disposable_usingAsyncImpl = async (
  f: (...args: DisposableLike[]) => Promise<unknown>,
  factories: readonly Factory<DisposableLike>[],
): Promise<unknown> => {
  const disposables = pipe(
    factories,
    ReadonlyArray.map(factory => factory()),
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
