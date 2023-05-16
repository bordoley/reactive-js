/// <reference types="./ReadonlyObjectMap.keys.d.ts" />

import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import * as Obj from "../../__internal__/Object.js";
import { pipe } from "../../functions.js";
const ReadonlyObjectMap_keys = () => (obj) => {
    function* ReadonlyObjectMapKeys() {
        for (const key in obj) {
            if (Obj.hasOwn(obj, key)) {
                yield key;
            }
        }
    }
    return pipe(ReadonlyObjectMapKeys(), Iterator_enumerate());
};
export default ReadonlyObjectMap_keys;
