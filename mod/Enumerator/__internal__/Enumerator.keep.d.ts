import { Function1, Predicate } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_keep: <T>(predicate: Predicate<T>) => Function1<EnumeratorLike<T>, EnumeratorLike<T>>;
export default Enumerator_keep;
