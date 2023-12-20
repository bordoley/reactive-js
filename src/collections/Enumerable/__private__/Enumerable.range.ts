import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import { pipe, returns } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_generate from "./Enumerable.generate.js";
import Enumerable_takeFirst from "./Enumerable.takeFirst.js";

const Enumerable_range: Enumerable.Signature["range"] = (
  start: number,
  options?: { count?: number },
) => {
  const count = clampPositiveInteger(options?.count ?? MAX_SAFE_INTEGER);

  return pipe(
    Enumerable_generate<number>(next => next + 1, returns(start - 1)),
    Enumerable_takeFirst({ count }),
  );
};

export default Enumerable_range;
