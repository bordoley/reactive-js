import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_pairwise: <T>() => Function1<EnumeratorLike<T>, EnumeratorLike<readonly [T, T]>>;
export default Enumerator_pairwise;
