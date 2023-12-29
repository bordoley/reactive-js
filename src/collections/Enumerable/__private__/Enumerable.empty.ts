import { pipe, returns } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import Enumerable_fromReadonlyArray from "./Enumerable.fromReadonlyArray.js";

const Enumerable_empty: Enumerable.Signature["empty"] = /*@__PURE__*/ (() =>
  pipe(
    [],
    Enumerable_fromReadonlyArray(),
    returns,
  ))() as Enumerable.Signature["empty"];

export default Enumerable_empty;
