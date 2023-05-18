import { EnumeratorLike } from "../../types.js";
declare const Enumerator_endWith: <T>(...values: readonly T[]) => (observable: EnumeratorLike<T>) => EnumeratorLike<T>;
export default Enumerator_endWith;
