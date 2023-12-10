import { Function2 } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

const ReadonlyArray_map: ReadonlyArray.Signature["map"] =
  <TA, TB, TKey extends ReadonlyArray.TKeyBase = ReadonlyArray.TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (arr: readonly TA[]): readonly TB[] =>
    arr.map(selector as Function2<TA, number, TB>);

export default ReadonlyArray_map;
