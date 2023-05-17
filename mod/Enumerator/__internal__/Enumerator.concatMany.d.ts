import { EnumeratorLike } from "../../types.js";
declare const Enumerator_concatMany: <T>(enumerators: readonly EnumeratorLike<T>[]) => EnumeratorLike<T>;
export default Enumerator_concatMany;
