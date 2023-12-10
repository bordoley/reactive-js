import { EnumeratorLike } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const Enumerator_concatAll: <T>() => Function1<EnumeratorLike<EnumeratorLike<T>>, EnumeratorLike<T>>;
export default Enumerator_concatAll;
