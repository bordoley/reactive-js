declare const MutableRefLike_current: unique symbol;
interface MutableRefLike<T = unknown> {
    get [MutableRefLike_current](): T;
    set [MutableRefLike_current](v: T);
}
declare const getCurrentRef: <T>(ref: MutableRefLike<T>) => T;
declare const setCurrentRef: <T>(v: T) => (ref: MutableRefLike<T>) => MutableRefLike<T>;
export { MutableRefLike, MutableRefLike_current, getCurrentRef, setCurrentRef };
