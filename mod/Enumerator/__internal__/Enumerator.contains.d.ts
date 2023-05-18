import { Equality, Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_contains: <T>(value: T, options?: {
    readonly equality?: Equality<T>;
}) => Function1<EnumeratorLike<T>, boolean>;
export default Enumerator_contains;
