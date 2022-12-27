import { SideEffect1, Function1 } from "../../../functions.mjs";
import { EnumeratorLike } from "../../../ix.mjs";
declare const forEach: <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(f: SideEffect1<T>) => Function1<TEnumerator, TEnumerator>;
export { forEach as default };
