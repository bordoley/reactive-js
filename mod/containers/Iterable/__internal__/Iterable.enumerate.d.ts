import { EnumeratorLike, IterableLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Iterable_enumerate: <T>() => Function1<IterableLike<T>, EnumeratorLike<T>>;
export default Iterable_enumerate;
