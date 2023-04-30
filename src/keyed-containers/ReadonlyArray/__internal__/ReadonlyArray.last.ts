import { Last, ReadonlyArrayContainerLike } from "../../../containers.js";
import { none } from "../../../functions.js";

const ReadonlyArray_last: Last<ReadonlyArrayContainerLike>["last"] =
  <T>() =>
  (values: ReadonlyArray<T>) => {
    const count = values.length;

    return count > 0 ? values[count - 1] : none;
  };

export default ReadonlyArray_last;
