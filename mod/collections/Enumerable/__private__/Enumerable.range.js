/// <reference types="./Enumerable.range.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import { pipe, returns } from "../../../functions.js";
import Enumerable_generate from "./Enumerable.generate.js";
import Enumerable_takeFirst from "./Enumerable.takeFirst.js";
const Enumerable_range = (start, options) => {
    const count = clampPositiveInteger(options?.count ?? MAX_SAFE_INTEGER);
    return pipe(Enumerable_generate(next => next + 1, returns(start - 1)), Enumerable_takeFirst({ count }));
};
export default Enumerable_range;
