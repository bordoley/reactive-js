import { Container, ReadonlyArrayContainer } from "../../../core.js";

const ReadonlyArray_first: Container.First<ReadonlyArrayContainer>["first"] =
  <T>() =>
  (values: ReadonlyArray<T>) =>
    values[0];

export default ReadonlyArray_first;
