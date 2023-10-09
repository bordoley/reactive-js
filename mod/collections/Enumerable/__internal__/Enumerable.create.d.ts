import { EnumerableLike, EnumeratorLike } from "../../../collections.js";
import { Factory } from "../../../functions.js";
declare const Enumerable_create: <T>(enumerate: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
export default Enumerable_create;
