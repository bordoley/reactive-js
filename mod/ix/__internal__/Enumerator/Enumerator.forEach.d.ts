import { SideEffect1, Function1 } from "../../../functions.js";
import { EnumeratorLike } from "../../../ix.js";
declare const Enumerator$forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export { Enumerator$forEach as default };
