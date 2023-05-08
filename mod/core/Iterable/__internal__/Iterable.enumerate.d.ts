import { EnumeratorLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Iterable_enumerate: <T>() => Function1<Iterable<T>, EnumeratorLike<T>>;
export default Iterable_enumerate;
