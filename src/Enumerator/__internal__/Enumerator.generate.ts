import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { Factory, Updater, pipe } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";

const Enumerator_generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
): EnumeratorLike<T> => {
  const iter = function* () {
    let acc = initialValue();
    while (true) {
      acc = generator(acc);
      yield acc;
    }
  };

  return pipe(iter(), Iterable_enumerate());
};

export default Enumerator_generate;
