/// <reference types="./MutableRefLike.d.ts" />
const MutableRefLike_current = Symbol("MutableRefLike_current");
const getCurrentRef = (ref) => ref[MutableRefLike_current];
const setCurrentRef = (v) => (ref) => {
    ref[MutableRefLike_current] = v;
    return ref;
};

export { MutableRefLike_current, getCurrentRef, setCurrentRef };
