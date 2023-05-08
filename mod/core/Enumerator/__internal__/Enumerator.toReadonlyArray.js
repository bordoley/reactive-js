/// <reference types="./Enumerator.toReadonlyArray.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../core.js";
const Enumerator_toReadonlyArray = () => (enumerator) => {
    const result = [];
    while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
    }
    return result;
};
export default Enumerator_toReadonlyArray;
