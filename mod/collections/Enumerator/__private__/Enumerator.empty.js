/// <reference types="./Enumerator.empty.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none } from "../../../functions.js";
const empty = {
    [EnumeratorLike_current]: none,
    [EnumeratorLike_hasCurrent]: false,
    [EnumeratorLike_isCompleted]: true,
    [EnumeratorLike_move]() {
        return false;
    },
};
const Enumerator_empty = () => empty;
export default Enumerator_empty;
