import { EnumeratorLike, SequenceLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const Sequence_enumerate: <T>() => Function1<SequenceLike<T>, EnumeratorLike<T>>;
export default Sequence_enumerate;
