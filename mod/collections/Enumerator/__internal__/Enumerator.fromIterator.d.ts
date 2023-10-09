import { EnumeratorLike } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const Enumerator_fromIterator: <T>() => Function1<Iterator<T>, EnumeratorLike<T>>;
export default Enumerator_fromIterator;
