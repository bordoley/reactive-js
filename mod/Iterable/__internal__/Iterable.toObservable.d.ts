import { Function1 } from "../../functions.js";
import { EnumerableWithSideEffectsLike } from "../../types.js";
declare const Iterable_toObservable: <T>() => Function1<Iterable<T>, EnumerableWithSideEffectsLike<T>>;
export default Iterable_toObservable;
