import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { TypePredicate } from "../../functions.js";
import ReadonlyMap_keep from "./ReadonlyMap.keep.js";

const ReadonlyMap_keepType: ReadonlyMap.Signature["keepType"] = (<
  TA,
  TB extends TA,
  TKey extends ReadonlyMap.TKeyBase,
>(
  predicate: TypePredicate<TA, TB>,
) =>
  ReadonlyMap_keep<TA, TKey>(predicate)) as ReadonlyMap.Signature["keepType"];

export default ReadonlyMap_keepType;
