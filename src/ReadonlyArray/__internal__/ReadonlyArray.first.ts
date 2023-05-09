import { ReadonlyArrayContainer } from "../../containers.js";

const ReadonlyArray_first: ReadonlyArrayContainer.TypeClass["first"] =
  <T>() =>
  (values: ReadonlyArray<T>) =>
    values[0];

export default ReadonlyArray_first;
