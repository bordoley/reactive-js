import { MutableRefLike, MutableRefLike_current } from "../util.internal";

const MutableRef$get = <T>(ref: MutableRefLike<T>): T =>
  ref[MutableRefLike_current];

export default MutableRef$get;
