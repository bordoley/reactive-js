/// <reference types="./Enumerator.empty.d.ts" />

import { none } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const empty = {
    [EnumeratorLike_current]: none,
    [EnumeratorLike_hasCurrent]: false,
    [EnumeratorLike_move]: function () {
        return false;
    },
};
const Enumerator_empty = () => empty;
export default Enumerator_empty;
