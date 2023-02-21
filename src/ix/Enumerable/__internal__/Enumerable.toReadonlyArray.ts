import { ToReadonlyArray } from "../../../containers.js";
import { isSome, pipe, raiseError } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import Disposable_getError from "../../../util/Disposable/__internal__/Disposable.getError.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const Enumerable_toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) => {
      const enumerator = pipe(enumerable, Enumerable_enumerate());
      const result: T[] = [];

      while (Enumerator_move(enumerator)) {
        result.push(Enumerator_getCurrent(enumerator));
      }

      const error = Disposable_getError(enumerator);
      return isSome(error) ? raiseError<T[]>(error) : result;
    };

export default Enumerable_toReadonlyArray;
