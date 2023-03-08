import { EnumeratorLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Enumerator_toIterator: <T>() => Function1<EnumeratorLike<T>, Iterator<T, any, undefined>>;
export default Enumerator_toIterator;
