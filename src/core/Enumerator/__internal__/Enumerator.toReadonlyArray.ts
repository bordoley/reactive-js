import {
  Container,
  EnumeratorContainer,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../core.js";

const Enumerator_toReadonlyArray: Container.ToReadonlyArray<EnumeratorContainer>["toReadonlyArray"] =

    <T>() =>
    (enumerator: EnumeratorLike<T>) => {
      const result: T[] = [];

      while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
      }

      return result;
    };

export default Enumerator_toReadonlyArray;
