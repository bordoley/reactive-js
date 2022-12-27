import { Factory } from "../../../functions.mjs";
import { EnumeratorLike, EnumerableLike } from "../../../ix.mjs";
declare const create: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
export { create as default };
