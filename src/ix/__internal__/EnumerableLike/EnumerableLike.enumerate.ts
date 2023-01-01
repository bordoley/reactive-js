import { none } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";

const EnumerableLike__enumerate =
  <T>() =>
  (enumerable: EnumerableLike<T>): EnumeratorLike<T> =>
    enumerable[InteractiveContainerLike_interact](none);

export default EnumerableLike__enumerate;
