/// <reference types="./MutableRefLike.get.d.ts" />
import { MutableRefLike_current } from '../util.internal.mjs';

const MutableRefLike__get = (ref) => ref[MutableRefLike_current];

export { MutableRefLike__get as default };
