import { Function1, Predicate } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean | undefined;
}) => Function1<EnumeratorLike<T>, EnumeratorLike<T>>;
export default Enumerator_takeWhile;
