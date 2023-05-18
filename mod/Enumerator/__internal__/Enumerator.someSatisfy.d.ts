import { Predicate } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_someSatisfy: <T>(predicate: Predicate<T>) => (enumerator: EnumeratorLike<T>) => boolean;
export default Enumerator_someSatisfy;
