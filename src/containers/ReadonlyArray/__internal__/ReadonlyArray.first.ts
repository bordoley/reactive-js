import { First, ReadonlyArrayLike } from "../../../containers.js";

const ReadonlyArray_first: First<ReadonlyArrayLike>["first"] =
  <T>() =>
  (values: ReadonlyArrayLike<T>) =>
    values[0];

export default ReadonlyArray_first;
