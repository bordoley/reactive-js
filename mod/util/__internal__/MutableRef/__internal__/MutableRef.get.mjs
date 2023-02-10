/// <reference types="./MutableRef.get.d.ts" />
import { MutableRefLike_current } from '../../util.internal.mjs';

const MutableRef_get = (ref) => ref[MutableRefLike_current];

export { MutableRef_get as default };
