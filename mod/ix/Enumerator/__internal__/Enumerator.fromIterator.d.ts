import { Function1 } from "../../../functions.js";
import { EnumeratorLike } from "../../../ix.js";
declare const Enumerator_fromIterator: <T>() => Function1<Iterator<T>, EnumeratorLike<T>>;
export default Enumerator_fromIterator;
