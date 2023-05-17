/// <reference types="./Enumerator.everySatisfy.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const Enumerator_everySatisfy = (predicate) => (enumerator) => {
    let result = true;
    while (enumerator[EnumeratorLike_move]()) {
        const next = enumerator[EnumeratorLike_current];
        result = predicate(next);
        if (!result) {
            break;
        }
    }
    return result;
};
export default Enumerator_everySatisfy;
