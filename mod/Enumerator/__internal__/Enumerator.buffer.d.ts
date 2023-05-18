import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_buffer: <T>(options?: {
    count?: number;
}) => Function1<EnumeratorLike<T>, EnumeratorLike<readonly T[]>>;
export default Enumerator_buffer;
