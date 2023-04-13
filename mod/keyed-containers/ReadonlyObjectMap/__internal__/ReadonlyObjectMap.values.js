/// <reference types="./ReadonlyObjectMap.values.d.ts" />

import { hasOwn } from "../../../__internal__/Object.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
const ReadonlyObjectMap_values = () => (obj) => {
    function* ReadonlyObjectMapValues() {
        for (const key in obj) {
            if (hasOwn(obj, key)) {
                yield obj[key];
            }
        }
    }
    return pipe(ReadonlyObjectMapValues(), Iterator_enumerate());
};
export default ReadonlyObjectMap_values;
