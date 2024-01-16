/// <reference types="./ReadonlyObjectMap.keySet.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { Set_add } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
const ReadonlyObjectMap_keySet = () => (obj) => {
    const keys = newInstance(Set);
    for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
            keys[Set_add](key);
        }
    }
    return keys;
};
export default ReadonlyObjectMap_keySet;
