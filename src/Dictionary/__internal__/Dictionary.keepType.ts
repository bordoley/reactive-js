import type * as Dictionary from "../../Dictionary.js";
import { TypePredicate } from "../../functions.js";
import Dictionary_keep from "./Dictionary.keep.js";

const Dictionary_keepType: Dictionary.Signature["keepType"] = (<
  TA,
  TB extends TA,
  TKey extends Dictionary.TKeyBase,
>(
  predicate: TypePredicate<TA, TB>,
) => Dictionary_keep<TA, TKey>(predicate)) as Dictionary.Signature["keepType"];

export default Dictionary_keepType;
