import { Last, ReadonlyArrayLike } from "../../../containers.js";
import { none } from "../../../functions.js";

const ReadonlyArray_last: Last<ReadonlyArrayLike>["last"] =
  <T>() =>
  (values: ReadonlyArrayLike<T>) => {
    const count = values.length;

    return count > 0 ? values[count - 1] : none;
  };

export default ReadonlyArray_last;
