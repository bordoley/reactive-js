/// <reference types="./ReadonlyObjectMap.entries.d.ts" />

import { hasOwn } from "../../../__internal__/Object.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
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
