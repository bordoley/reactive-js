/// <reference types="./MutableRef.set.d.ts" />

import { MutableRefLike_current, } from "../../__internal__/util.internal.js";
const MutableRef_set = (v) => (ref) => {
    ref[MutableRefLike_current] = v;
    return ref;
};
export default MutableRef_set;
