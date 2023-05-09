/// <reference types="./Enumerator.toIterator.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const Enumerator_toIterator = () => function* (enumerator) {
    while (enumerator[EnumeratorLike_move]()) {
        yield enumerator[EnumeratorLike_current];
    }
};
export default Enumerator_toIterator;
