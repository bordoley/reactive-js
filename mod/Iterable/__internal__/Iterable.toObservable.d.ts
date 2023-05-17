import { Function1 } from "../../functions.js";
import { EnumerableLike } from "../../types.js";
declare const Iterable_toObservable: <T>() => Function1<Iterable<T>, EnumerableLike<T>>;
export default Iterable_toObservable;
