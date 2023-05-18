import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_concatWith: <T>(...tail: EnumeratorLike<T>[]) => Function1<EnumeratorLike<T>, EnumeratorLike<T>>;
export default Enumerator_concatWith;
