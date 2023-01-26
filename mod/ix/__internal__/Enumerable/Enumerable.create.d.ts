import { Factory } from "../../../functions.js";
import { EnumeratorLike, EnumerableLike } from "../../../ix.js";
declare const Enumerable$create: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
export { Enumerable$create as default };
