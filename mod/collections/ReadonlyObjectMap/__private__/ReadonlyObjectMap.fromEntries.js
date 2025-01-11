/// <reference types="./ReadonlyObjectMap.fromEntries.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
const ReadonlyObjectMap_fromEntries = () => (entries) => {
    const result = Obj.createObjectMap();
    for (const [key, value] of entries) {
        result[key] = value;
    }
    return result;
};
export default ReadonlyObjectMap_fromEntries;
