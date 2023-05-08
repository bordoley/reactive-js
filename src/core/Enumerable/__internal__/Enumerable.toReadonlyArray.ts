import {
  Container,
  DisposableLike_dispose,
  DisposableLike_error,
  EnumerableContainer,
  EnumerableLike,
} from "../../../core.js";
import Enumerator_toReadonlyArray from "../../../core/Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import { isSome, pipe, raiseError } from "../../../functions.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const Enumerable_toReadonlyArray: Container.ToReadonlyArray<EnumerableContainer>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) => {
      const enumerator = pipe(enumerable, Enumerable_enumerate<T>());
      const result = pipe(enumerator, Enumerator_toReadonlyArray());

      enumerator[DisposableLike_dispose]();

      const err = enumerator[DisposableLike_error];
      if (isSome(err)) {
        raiseError(err);
      }

      return result;
    };

export default Enumerable_toReadonlyArray;
