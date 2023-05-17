/// <reference types="./Enumerator.someSatisfy.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const Enumerator_someSatisfy = (predicate) => (enumerator) => {
    let result = false;
    while (enumerator[EnumeratorLike_move]()) {
        const next = enumerator[EnumeratorLike_current];
        result = predicate(next);
        if (result) {
            break;
        }
    }
    return result;
};
export default Enumerator_someSatisfy;
