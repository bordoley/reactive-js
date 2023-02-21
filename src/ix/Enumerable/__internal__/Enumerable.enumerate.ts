import { none } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix.js";

const Enumerable_enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> =>
    enumerable[InteractiveContainerLike_interact](none);

export default Enumerable_enumerate;
