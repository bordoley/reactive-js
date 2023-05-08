/// <reference types="./ReadonlyObjectMap.keys.d.ts" />

import { hasOwn } from "../../../__internal__/Object.js";
import Iterator_enumerate from "../../../core/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
const ReadonlyObjectMap_keys = () => (obj) => {
    function* ReadonlyObjectMapKeys() {
        for (const key in obj) {
            if (hasOwn(obj, key)) {
                yield key;
            }
        }
    }
    return pipe(ReadonlyObjectMapKeys(), Iterator_enumerate());
};
export default ReadonlyObjectMap_keys;
