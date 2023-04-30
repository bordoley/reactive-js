import {
  EnumeratorContainer,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
  ToReadonlyArray,
} from "../../../containers.js";

const Enumerator_toReadonlyArray: ToReadonlyArray<EnumeratorContainer>["toReadonlyArray"] =

    <T>() =>
    (enumerator: EnumeratorLike<T>) => {
      const result: T[] = [];

      while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
      }

      return result;
    };

export default Enumerator_toReadonlyArray;
