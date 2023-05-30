import { Function1, Tuple2 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_pairwise: <T>() => Function1<EnumeratorLike<T>, EnumeratorLike<Tuple2<T, T>>>;
export default Enumerator_pairwise;
