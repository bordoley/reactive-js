/// <reference types="./Enumerator.last.d.ts" />

import { none } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const Enumerator_last = () => (enumerator) => {
    let last = none;
    while (enumerator[EnumeratorLike_move]()) {
        last = enumerator[EnumeratorLike_current];
    }
    return last;
};
export default Enumerator_last;
