/// <reference types="./ReadonlyObjectMap.entries.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
const ReadonlyObjectMap_entries = () => (obj) => {
    function* ReadonlyObjectMapEntries() {
        for (const key in obj) {
            if (Obj.hasOwn(obj, key)) {
                yield [key, obj[key]];
            }
        }
    }
    return Enumerable_create(() => pipe(ReadonlyObjectMapEntries(), Enumerator_fromIterator()));
};
export default ReadonlyObjectMap_entries;
