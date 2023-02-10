import {
  MutableRefLike,
  MutableRefLike_current,
} from "../../__internal__/util.internal";

const MutableRef_set =
  <T>(v: T) =>
  (ref: MutableRefLike<T>): MutableRefLike<T> => {
    ref[MutableRefLike_current] = v;
    return ref;
  };

export default MutableRef_set;
