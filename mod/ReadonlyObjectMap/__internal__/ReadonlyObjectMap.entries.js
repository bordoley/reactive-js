/// <reference types="./ReadonlyObjectMap.entries.d.ts" />

import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { hasOwn } from "../../__internal__/Object.js";
import { pipe } from "../../functions.js";
const ReadonlyObjectMap_entries = () => (obj) => {
    function* ReadonlyObjectMapEntries() {
        for (const key in obj) {
            if (hasOwn(obj, key)) {
                yield [key, obj[key]];
            }
        }
    }
    return pipe(ReadonlyObjectMapEntries(), Iterator_enumerate());
};
export default ReadonlyObjectMap_entries;
