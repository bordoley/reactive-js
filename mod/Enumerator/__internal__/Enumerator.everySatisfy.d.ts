import { Predicate } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_everySatisfy: <T>(predicate: Predicate<T>) => (enumerator: EnumeratorLike<T>) => boolean;
export default Enumerator_everySatisfy;
