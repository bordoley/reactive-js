import { ToReadonlyArray } from "../../../containers";
import { isSome, pipe, raise } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import Disposable$getError from "../../../util/__internal__/Disposable/Disposable.getError";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$move from "../Enumerator/Enumerator.move";
import Enumerable$enumerate from "./Enumerable.enumerate";

const Enumerable$toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) => {
      const enumerator = pipe(enumerable, Enumerable$enumerate());
      const result: T[] = [];

      while (Enumerator$move(enumerator)) {
        result.push(Enumerator$getCurrent(enumerator));
      }

      const error = Disposable$getError(enumerator);
      return isSome(error) ? raise<T[]>(error) : result;
    };

export default Enumerable$toReadonlyArray;
