/// <reference types="./MutableRef.get.d.ts" />
import { MutableRefLike_current } from '../util.internal.mjs';

const MutableRef$get = (ref) => ref[MutableRefLike_current];

export { MutableRef$get as default };
