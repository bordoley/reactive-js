export const MutableRefLike_current = Symbol("MutableRefLike_current");

export interface MutableRefLike<T = unknown> {
  get [MutableRefLike_current](): T;
  set [MutableRefLike_current](v: T);
}

export const getCurrentRef = <T>(ref: MutableRefLike<T>): T =>
  ref[MutableRefLike_current];

export const setCurrentRef =
  <T>(v: T) =>
  (ref: MutableRefLike<T>): MutableRefLike<T> => {
    ref[MutableRefLike_current] = v;
    return ref;
  };
