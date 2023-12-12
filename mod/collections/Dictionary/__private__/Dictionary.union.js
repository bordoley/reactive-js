/// <reference types="./Dictionary.union.d.ts" />

import { pipe } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import Dictionary_toReadonlyMap from "./Dictionary.toReadonlyMap.js";
const Dictionary_union = (d2) => (d1) => {
    const m1 = pipe(d1, Dictionary_toReadonlyMap());
    const m2 = pipe(d2, Dictionary_toReadonlyMap());
    return pipe(m1, ReadonlyMap.union(m2), ReadonlyMap.toDictionary());
};
export default Dictionary_union;
