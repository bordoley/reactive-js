/// <reference types="./ReadonlyRecord.values.d.ts" />

import { hasOwn } from "../../../__internal__/Object.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
const ReadonlyRecord_values = () => (obj) => {
    function* ReadonlyRecordValues() {
        for (const key in obj) {
            if (hasOwn(obj, key)) {
                yield obj[key];
            }
        }
    }
    return pipe(ReadonlyRecordValues(), Iterator_enumerate());
};
export default ReadonlyRecord_values;
