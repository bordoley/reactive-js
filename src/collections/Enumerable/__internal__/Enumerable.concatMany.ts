import { pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import ReadonlyArray_values from "../../ReadonlyArray/__internal__/ReadonlyArray.values.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_empty from "./Enumerable.empty.js";

const Enumerable_concatMany: Enumerable.Signature["concatMany"] = enumerables =>
  enumerables.length === 0
    ? Enumerable_empty()
    : pipe(enumerables, ReadonlyArray_values(), Enumerable_concatAll());

export default Enumerable_concatMany;
