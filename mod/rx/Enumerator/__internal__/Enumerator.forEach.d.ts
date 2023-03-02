import { Function1, SideEffect1 } from "../../../functions.js";
import { EnumeratorLike } from "../../../rx.js";
declare const Enumerator_forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export default Enumerator_forEach;
