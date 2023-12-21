/// <reference types="./ReadonlyObjectMap.keys.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
const ReadonlyObjectMap_keys = () => (obj) => pipe(function* () {
    for (const key in obj) {
        if (Obj.hasOwn(obj, key)) {
            yield key;
        }
    }
}, Enumerable_fromIteratorFactory());
export default ReadonlyObjectMap_keys;
