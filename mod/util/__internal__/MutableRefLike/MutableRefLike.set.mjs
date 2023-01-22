/// <reference types="./MutableRefLike.set.d.ts" />
import { MutableRefLike_current } from '../util.internal.mjs';

const MutableRefLike__set = (v) => (ref) => {
    ref[MutableRefLike_current] = v;
    return ref;
};

export { MutableRefLike__set as default };
