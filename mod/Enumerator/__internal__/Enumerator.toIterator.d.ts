import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_toIterator: <T>() => Function1<EnumeratorLike<T>, Iterator<T, any, undefined>>;
export default Enumerator_toIterator;
