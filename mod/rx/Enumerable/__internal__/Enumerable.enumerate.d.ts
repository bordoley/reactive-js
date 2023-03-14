import { EnumeratorLike } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
declare const Enumerable_enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T> & DisposableLike;
export default Enumerable_enumerate;
