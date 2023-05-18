import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_concatAll: <T>() => Function1<EnumeratorLike<EnumeratorLike<T>>, EnumeratorLike<T>>;
export default Enumerator_concatAll;
