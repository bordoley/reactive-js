import { Array_push, __DEV__ } from "../../../__internal__/constants.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { raiseIf } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";

const Enumerable_toReadonlyArray: Enumerable.Signature["toReadonlyArray"] =
  <T>() =>
  (enumerable: EnumerableLike<T>) => {
    const result: T[] = [];

    const enumerator = enumerable[EnumerableLike_enumerate]();

    if (__DEV__) {
      raiseIf(
        enumerator[EnumeratorLike_isCompleted],
        "Enumerator is completed before initial call to EnumeratorLike_move",
      );
    }

    while (enumerator[EnumeratorLike_move]()) {
      if (__DEV__) {
        raiseIf(
          !enumerator[EnumeratorLike_hasCurrent],
          "EnumeratorLike_hasCurrent returned false after EnumeratorLike_move returned true",
        );
      }
      result[Array_push](enumerator[EnumeratorLike_current]);
    }

    if (__DEV__) {
      raiseIf(
        !enumerator[EnumeratorLike_isCompleted],
        "EnumeratorLike_move returned false, but Enumerator is not completed",
      );
      raiseIf(
        enumerator[EnumeratorLike_move](),
        "EnumeratorLike_move returned true after return returning false",
      );
    }

    return result;
  };

export default Enumerable_toReadonlyArray;
