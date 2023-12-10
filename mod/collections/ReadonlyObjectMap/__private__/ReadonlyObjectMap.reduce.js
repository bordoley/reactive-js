/// <reference types="./ReadonlyObjectMap.reduce.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
const ReadonlyObjectMap_reduce = (reducer, initialValue) => (obj) => {
    let result = initialValue();
    for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
            result = reducer(result, obj[key], key);
        }
    }
    return result;
};
export default ReadonlyObjectMap_reduce;
