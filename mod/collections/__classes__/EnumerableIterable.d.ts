import { EnumerableLike_enumerate } from "../../collections.js";
export default class EnumerableIterable<T> implements Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
    [EnumerableLike_enumerate](): import("../../collections.js").EnumeratorLike<T>;
}
