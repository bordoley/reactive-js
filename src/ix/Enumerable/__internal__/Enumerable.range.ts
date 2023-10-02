import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import { pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import Enumerable_create from "./Enumerable.create.js";

const Enumerable_range: Enumerable.Signature["range"] = (
  start: number,
  options?: { count?: number },
) => {
  const count = clampPositiveInteger(options?.count ?? MAX_SAFE_INTEGER);

  const generateEnumerator = () => {
    const iter = function* () {
      let acc = start;
      while (acc < count) {
        yield acc;
        acc++;
      }
    };

    return pipe(iter(), Enumerator_fromIterator());
  };

  return Enumerable_create(generateEnumerator);
};

export default Enumerable_range;
