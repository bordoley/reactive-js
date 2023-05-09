import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Iterable_enumerate: <T>() => Function1<Iterable<T>, EnumeratorLike<T>>;
export default Iterable_enumerate;
