import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_map: <TA, TB>(selector: Function1<TA, TB>) => (delegate: EnumeratorLike<TA>) => EnumeratorLike<TB>;
export default Enumerator_map;
