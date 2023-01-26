import { ToReadonlyArray } from "../../../containers";
import { isSome, pipe, raise } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import Disposable_getError from "../../../util/__internal__/Disposable/Disposable.getError";
import Enumerator_getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator_move from "../Enumerator/Enumerator.move";
import Enumerable_enumerate from "./Enumerable.enumerate";

const Enumerable_toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) => {
      const enumerator = pipe(enumerable, Enumerable_enumerate());
      const result: T[] = [];

      while (Enumerator_move(enumerator)) {
        result.push(Enumerator_getCurrent(enumerator));
      }

      const error = Disposable_getError(enumerator);
      return isSome(error) ? raise<T[]>(error) : result;
    };

export default Enumerable_toReadonlyArray;
