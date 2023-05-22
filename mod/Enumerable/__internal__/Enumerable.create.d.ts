import { Factory } from "../../functions.js";
import { EnumerableLike, EnumeratorLike } from "../../types.js";
declare const Enumerable_create: <T>(enumerate: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
export default Enumerable_create;
