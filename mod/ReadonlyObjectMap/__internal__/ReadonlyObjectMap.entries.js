/// <reference types="./ReadonlyObjectMap.entries.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import * as Obj from "../../__internal__/Object.js";
import { pipe } from "../../functions.js";
const ReadonlyObjectMap_entries = () => (obj) => {
    function* ReadonlyObjectMapEntries() {
        for (const key in obj) {
            if (Obj.hasOwn(obj, key)) {
                yield [key, obj[key]];
            }
        }
    }
    return Enumerable_create(() => pipe(ReadonlyObjectMapEntries(), Iterator_enumerate()));
};
export default ReadonlyObjectMap_entries;
