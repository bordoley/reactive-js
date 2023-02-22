/// <reference types="./MutableRef.get.d.ts" />

import { MutableRefLike_current } from "../../util.internal.js";
const MutableRef_get = (ref) => ref[MutableRefLike_current];
export default MutableRef_get;
