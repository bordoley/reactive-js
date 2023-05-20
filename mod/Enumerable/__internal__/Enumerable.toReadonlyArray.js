/// <reference types="./Enumerable.toReadonlyArray.d.ts" />

import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose } from "../../types.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, Enumerable_enumerate());
    const result = pipe(enumerator, Enumerator_toReadonlyArray());
    enumerator[DisposableLike_dispose]();
    Disposable_raiseIfDisposedWithError(enumerator);
    return result;
};
export default Enumerable_toReadonlyArray;
