import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_skipFirst: <T>(count: number) => Function1<EnumeratorLike<T>, EnumeratorLike<T>>;
export default Enumerator_skipFirst;
