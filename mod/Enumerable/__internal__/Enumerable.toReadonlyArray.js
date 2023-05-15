/// <reference types="./Enumerable.toReadonlyArray.d.ts" />

import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import { isSome, pipe, raiseError } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, } from "../../types.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, Enumerable_enumerate());
    const result = pipe(enumerator, Enumerator_toReadonlyArray());
    enumerator[DisposableLike_dispose]();
    const err = enumerator[DisposableLike_error];
    if (isSome(err)) {
        raiseError(err);
    }
    return result;
};
export default Enumerable_toReadonlyArray;
