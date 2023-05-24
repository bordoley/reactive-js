/// <reference types="./ReadonlyObjectMap.keys.d.ts" />

import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
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
    return Enumerable_create(() => pipe(ReadonlyObjectMapKeys(), Iterator_enumerate()), true);
};
export default ReadonlyObjectMap_keys;
