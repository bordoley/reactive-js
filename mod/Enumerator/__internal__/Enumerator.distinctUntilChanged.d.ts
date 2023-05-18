import { Equality, Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_distinctUntilChanged: <T>(options?: {
    equality?: Equality<T>;
}) => Function1<EnumeratorLike<T>, EnumeratorLike<T>>;
export default Enumerator_distinctUntilChanged;
