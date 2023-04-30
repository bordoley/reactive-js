import { Optional, isSome } from "../../../functions.js";

const Optional_toReadonlyArray =
  <T>() =>
  (optional: Optional<T>): ReadonlyArray<T> =>
    isSome(optional) ? [optional] : [];

export default Optional_toReadonlyArray;
