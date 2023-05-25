import { Function1, Optional } from "../../functions.js";
import { EnumerableLike } from "../../types.js";
declare const Optional_toObservable: <T>() => Function1<Optional<T>, EnumerableLike<T>>;
export default Optional_toObservable;
