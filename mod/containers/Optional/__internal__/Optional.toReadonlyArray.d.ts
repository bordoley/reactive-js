import { ReadonlyArrayContainerLike } from "../../../containers.js";
import { Optional } from "../../../functions.js";
declare const Optional_toReadonlyArray: <T>() => (optional: Optional<T>) => ReadonlyArrayContainerLike<T>;
export default Optional_toReadonlyArray;
