import { Container, ReadonlyArrayContainer } from "../../../containers.js";

const ReadonlyArray_first: Container.First<ReadonlyArrayContainer>["first"] =
  <T>() =>
  (values: ReadonlyArray<T>) =>
    values[0];

export default ReadonlyArray_first;
