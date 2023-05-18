import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_flatMapIterable: <TA, TB>(selector: Function1<TA, Iterable<TB>>) => (enumerator: EnumeratorLike<TA>) => EnumeratorLike<TB>;
export default Enumerator_flatMapIterable;
