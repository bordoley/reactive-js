import { ToReadonlyArray } from "../../../containers";
import { isSome, pipe, raise } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import DisposableLike__getError from "../../../util/__internal__/DisposableLike/DisposableLike.getError";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__move from "../EnumeratorLike/EnumeratorLike.move";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";

const EnumerableLike__toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) => {
      const enumerator = pipe(enumerable, EnumerableLike__enumerate());
      const result: T[] = [];

      while (EnumeratorLike__move(enumerator)) {
        result.push(EnumeratorLike__getCurrent(enumerator));
      }

      const error = DisposableLike__getError(enumerator);
      return isSome(error) ? raise<T[]>(error) : result;
    };

export default EnumerableLike__toReadonlyArray;
