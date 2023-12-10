/// <reference types="./ReadonlyObjectMap.keys.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__private__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
const ReadonlyObjectMap_keys = () => (obj) => {
    function* ReadonlyObjectMapKeys() {
        for (const key in obj) {
            if (Obj.hasOwn(obj, key)) {
                yield key;
            }
        }
    }
    return Enumerable_create(() => pipe(ReadonlyObjectMapKeys(), Enumerator_fromIterator()));
};
export default ReadonlyObjectMap_keys;
