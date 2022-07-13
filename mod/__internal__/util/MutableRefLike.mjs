/// <reference types="./MutableRefLike.d.ts" />
const MutableRefLike_current = Symbol("MutableRefLike_current");
const getCurrent = (ref) => ref[MutableRefLike_current];
const setCurrent = (v) => (ref) => {
    ref[MutableRefLike_current] = v;
    return ref;
};

export { MutableRefLike_current, getCurrent, setCurrent };
