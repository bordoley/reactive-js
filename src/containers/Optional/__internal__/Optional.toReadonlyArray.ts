import { ReadonlyArrayContainerLike } from "../../../containers.js";
import { Optional, isSome } from "../../../functions.js";

const Optional_toReadonlyArray =
  <T>() =>
  (optional: Optional<T>): ReadonlyArrayContainerLike<T> =>
    isSome(optional) ? [optional] : [];

export default Optional_toReadonlyArray;
