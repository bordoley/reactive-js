import { ReadonlyArrayLike } from "../../../containers.mjs";
import { Predicate, Function1 } from "../../../functions.mjs";
declare const some: <T>(predicate: Predicate<T>) => Function1<ReadonlyArrayLike<T>, boolean>;
export { some as default };
