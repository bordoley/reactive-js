import { Function1, SideEffect1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_forEach: <T>(effect: SideEffect1<T>) => Function1<EnumeratorLike<T>, EnumeratorLike<T>>;
export default Enumerator_forEach;
