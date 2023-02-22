/// <reference types="./Enumerable.toReadonlyArray.d.ts" />

import { isSome, pipe, raiseError } from "../../../functions.js";
import Disposable_getError from "../../../util/Disposable/__internal__/Disposable.getError.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, Enumerable_enumerate());
    const result = [];
    while (Enumerator_move(enumerator)) {
        result.push(Enumerator_getCurrent(enumerator));
    }
    const error = Disposable_getError(enumerator);
    return isSome(error) ? raiseError(error) : result;
};
export default Enumerable_toReadonlyArray;
