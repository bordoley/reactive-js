import { MutableRefLike, MutableRefLike_current } from "../util.internal";

const MutableRefLike__get = <T>(ref: MutableRefLike<T>): T =>
  ref[MutableRefLike_current];

export default MutableRefLike__get;
