import { Function1 } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_concatMap: ReadonlyArray.Signature["concatMap"] =
  <TA, TB>(selector: Function1<TA, readonly TB[]>) =>
  (arr: ReadonlyArray<TA>) =>
    arr.flatMap(selector);

export default ReadonlyArray_concatMap;
