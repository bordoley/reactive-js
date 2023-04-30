import { First, ReadonlyArrayContainerLike } from "../../../containers.js";

const ReadonlyArray_first: First<ReadonlyArrayContainerLike>["first"] =
  <T>() =>
  (values: ReadonlyArrayContainerLike<T>) =>
    values[0];

export default ReadonlyArray_first;
