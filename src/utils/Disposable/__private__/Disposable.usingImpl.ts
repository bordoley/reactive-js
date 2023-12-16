import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { Factory, pipe } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";

const Disposable_usingImpl = (
  f: (...args: DisposableLike[]) => unknown,
  factories: readonly Factory<DisposableLike>[],
): unknown => {
  const disposables = pipe(
    factories,
    ReadonlyArray.map(factory => factory()),
  );

  try {
    return f(...disposables);
  } finally {
    for (const disposable of disposables) {
      disposable[DisposableLike_dispose]();
    }
  }
};

export default Disposable_usingImpl;
