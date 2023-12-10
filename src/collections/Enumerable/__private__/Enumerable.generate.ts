import { Factory, Updater, pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_generate: Enumerable.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) => {
  const generateEnumerator = () => {
    const iter = function* () {
      let acc = initialValue();
      while (true) {
        acc = generator(acc);
        yield acc;
      }
    };

    return pipe(iter(), Enumerator_fromIterator());
  };

  return Enumerable_create(generateEnumerator);
};

export default Enumerable_generate;
