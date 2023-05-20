import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose, EnumerableLike } from "../../types.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const Enumerable_toReadonlyArray: Enumerable.Signature["toReadonlyArray"] =
  <T>() =>
  (enumerable: EnumerableLike<T>) => {
    const enumerator = pipe(enumerable, Enumerable_enumerate<T>());
    const result = pipe(enumerator, Enumerator_toReadonlyArray());

    enumerator[DisposableLike_dispose]();

    Disposable_raiseIfDisposedWithError(enumerator);

    return result;
  };

export default Enumerable_toReadonlyArray;
