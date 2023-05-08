/// <reference types="./Enumerator.empty.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../core.js";
import { none } from "../../../functions.js";
const empty = {
    [EnumeratorLike_current]: none,
    [EnumeratorLike_hasCurrent]: false,
    [EnumeratorLike_move]: function () {
        return false;
    },
};
const Enumerator_empty = () => empty;
export default Enumerator_empty;
