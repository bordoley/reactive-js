/// <reference types="./Enumerable.toIterable.d.ts" />

import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
function* iterate(enumerable) {
    const enumerator = enumerable[EnumerableLike_enumerate]();
    while (enumerator[EnumeratorLike_move]()) {
        yield enumerator[EnumeratorLike_current];
    }
}
const Enumerable_toIterable = () => (enumerable) => ({
    [Symbol.iterator]() {
        return iterate(enumerable);
    },
});
export default Enumerable_toIterable;
