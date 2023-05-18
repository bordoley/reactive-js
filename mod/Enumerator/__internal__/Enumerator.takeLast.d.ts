import { EnumeratorLike } from "../../types.js";
declare const Enumerator_takeLast: <T>(options?: {
    readonly count?: number;
}) => (enumerator: EnumeratorLike<T>) => EnumeratorLike<T>;
export default Enumerator_takeLast;
