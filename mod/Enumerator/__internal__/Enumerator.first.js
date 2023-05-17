/// <reference types="./Enumerator.first.d.ts" />

import { none } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const Enumerator_first = () => (enumerator) => {
    enumerator[EnumeratorLike_move]();
    return enumerator[EnumeratorLike_hasCurrent]
        ? enumerator[EnumeratorLike_current]
        : none;
};
export default Enumerator_first;
