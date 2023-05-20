/// <reference types="./Enumerator.toReadonlyArray.d.ts" />

import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const Enumerator_toReadonlyArray = () => (enumerator) => {
    const result = [];
    while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
    }
    Disposable_raiseIfDisposedWithError(enumerator);
    return result;
};
export default Enumerator_toReadonlyArray;
