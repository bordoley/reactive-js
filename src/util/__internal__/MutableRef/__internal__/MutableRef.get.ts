import { MutableRefLike, MutableRefLike_current } from "../../util.internal.js";

const MutableRef_get = <T>(ref: MutableRefLike<T>): T =>
  ref[MutableRefLike_current];

export default MutableRef_get;
