import {
  EnumeratorContainer,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableContainers,
} from "../../../core.js";

const Enumerator_toReadonlyArray: RunnableContainers.TypeClass<EnumeratorContainer>["toReadonlyArray"] =

    <T>() =>
    (enumerator: EnumeratorLike<T>) => {
      const result: T[] = [];

      while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
      }

      return result;
    };

export default Enumerator_toReadonlyArray;
