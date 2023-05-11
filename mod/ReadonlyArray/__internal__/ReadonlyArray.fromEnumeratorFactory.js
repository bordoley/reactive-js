/// <reference types="./ReadonlyArray.fromEnumeratorFactory.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const ReadonlyArray_fromEnumeratorFactory = () => (factory) => {
    const result = [];
    const enumerator = factory();
    while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
    }
    return result;
};
export default ReadonlyArray_fromEnumeratorFactory;
