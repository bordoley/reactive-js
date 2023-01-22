import { MutableRefLike, MutableRefLike_current } from "../util.internal";

const MutableRefLike__set =
  <T>(v: T) =>
  (ref: MutableRefLike<T>): MutableRefLike<T> => {
    ref[MutableRefLike_current] = v;
    return ref;
  };

export default MutableRefLike__set;
