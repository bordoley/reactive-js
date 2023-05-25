import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import type * as Observable from "../../Observable.js";
import { Factory, Updater, pipe } from "../../functions.js";

const Observable_generate: Observable.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) => {
  const generateEnumerator =
    <T>(generator: Updater<T>, initialValue: Factory<T>) =>
    () => {
      const iter = function* () {
        let acc = initialValue();
        while (true) {
          acc = generator(acc);
          yield acc;
        }
      };

      return pipe(iter(), Iterable_enumerate());
    };

  return Enumerable_create(generateEnumerator(generator, initialValue));
};

export default Observable_generate;
