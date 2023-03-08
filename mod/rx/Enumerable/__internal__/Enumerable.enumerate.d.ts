import { EnumerableLike } from "../../../rx.js";
import { DisposableEnumeratorLike } from "../../../util.js";
declare const Enumerable_enumerate: <T>() => (enumerable: EnumerableLike<T>) => DisposableEnumeratorLike<T>;
export default Enumerable_enumerate;
