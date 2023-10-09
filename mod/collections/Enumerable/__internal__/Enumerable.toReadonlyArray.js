/// <reference types="./Enumerable.toReadonlyArray.d.ts" />

import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
const Enumerable_toReadonlyArray = () => (enumerable) => {
    const result = [];
    const enumerator = enumerable[EnumerableLike_enumerate]();
    while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
    }
    return result;
};
export default Enumerable_toReadonlyArray;
