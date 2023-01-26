/// <reference types="./MutableRef.set.d.ts" />
import { MutableRefLike_current } from '../util.internal.mjs';

const MutableRef_set = (v) => (ref) => {
    ref[MutableRefLike_current] = v;
    return ref;
};

export { MutableRef_set as default };
