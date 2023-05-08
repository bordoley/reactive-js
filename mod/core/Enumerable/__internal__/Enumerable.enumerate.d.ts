import { DisposableLike, EnumerableLike, EnumeratorLike } from "../../../core.js";
declare const Enumerable_enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T> & DisposableLike;
export default Enumerable_enumerate;
