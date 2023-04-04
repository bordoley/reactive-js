import { EnumeratorLike, ReadonlyArrayLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
declare const ReadonlyArray_enumerate: <T>() => Function1<ReadonlyArrayLike<T>, EnumeratorLike<T>>;
export default ReadonlyArray_enumerate;
