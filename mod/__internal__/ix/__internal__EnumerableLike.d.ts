import { Empty } from "../../containers.mjs";
import { Factory } from "../../functions.mjs";
import { EnumerableLike } from "../../ix.mjs";
import { EnumeratorLike } from "../../util.mjs";
declare const create: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
declare const empty: Empty<EnumerableLike>["empty"];
export { create, empty };
