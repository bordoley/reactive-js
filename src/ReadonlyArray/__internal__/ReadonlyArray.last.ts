import { none } from "../../functions.js";
import { ReadonlyArrayContainer, RunnableContainers } from "../../types.js";

const ReadonlyArray_last: RunnableContainers.TypeClass<ReadonlyArrayContainer>["last"] =

    <T>() =>
    (values: ReadonlyArray<T>) => {
      const count = values.length;

      return count > 0 ? values[count - 1] : none;
    };

export default ReadonlyArray_last;
