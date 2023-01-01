import { ToReadonlyArray } from "../../../containers";
import { isSome, pipe } from "../../../functions";
import { EnumerableLike } from "../../../ix";
import { getException } from "../../../util/DisposableLike";
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

      const error = getException(enumerator);

      if (isSome(error)) {
        throw error.cause;
      }

      return result;
    };

export default EnumerableLike__toReadonlyArray;
