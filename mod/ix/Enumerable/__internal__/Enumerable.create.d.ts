import { Factory } from "../../../functions.js";
import { EnumerableLike, EnumeratorLike } from "../../../ix.js";
declare const Enumerable_create: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
export default Enumerable_create;
