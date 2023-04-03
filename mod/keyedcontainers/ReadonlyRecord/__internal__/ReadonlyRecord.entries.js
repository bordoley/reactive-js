/// <reference types="./ReadonlyRecord.entries.d.ts" />

import { hasOwn } from "../../../__internal__/Object.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
const ReadonlyRecord_entries = () => (obj) => {
    function* ReadonlyRecordEntries() {
        for (const key in obj) {
            if (hasOwn(obj, key)) {
                yield [key, obj[key]];
            }
        }
    }
    return pipe(ReadonlyRecordEntries(), Iterator_enumerate());
};
export default ReadonlyRecord_entries;
