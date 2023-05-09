import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Iterator_enumerate: <T>() => Function1<Iterator<T>, EnumeratorLike<T>>;
export default Iterator_enumerate;
