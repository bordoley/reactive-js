import {
  ReadonlyArrayContainer,
  RunnableContainers,
} from "../../containers.js";

const ReadonlyArray_first: RunnableContainers.TypeClass<ReadonlyArrayContainer>["first"] =

    <T>() =>
    (values: ReadonlyArray<T>) =>
      values[0];

export default ReadonlyArray_first;
