import { EnumerableLike } from "../../../rx.js";
import { EnumeratorLike } from "../../../util.js";
declare const Enumerable_enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
export default Enumerable_enumerate;
