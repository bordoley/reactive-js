/// <reference types="./ReadonlyObjectMap.entries.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { pipe, tuple } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
const ReadonlyObjectMap_entries = () => (obj) => pipe(function* () {
    for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
            yield tuple(key, obj[key]);
        }
    }
}, Enumerable_fromIteratorFactory());
export default ReadonlyObjectMap_entries;
