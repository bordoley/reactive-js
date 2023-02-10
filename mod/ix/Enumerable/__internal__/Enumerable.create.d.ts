import { Factory } from "../../../functions.js";
import { EnumeratorLike, EnumerableLike } from "../../../ix.js";
declare const Enumerable_create: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
export { Enumerable_create as default };
