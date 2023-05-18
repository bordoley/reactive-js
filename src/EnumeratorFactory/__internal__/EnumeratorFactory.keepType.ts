import Enumerator_keepType from "../../Enumerator/__internal__/Enumerator.keepType.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { TypePredicate, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_keepType: EnumeratorFactory.Signature["keepType"] = (<
  TA,
  TB extends TA,
>(
  predicate: TypePredicate<TA, TB>,
) =>
  composeLazy(
    EnumeratorFactory_enumerate<TA>(),
    Enumerator_keepType<TA, TB>(predicate),
  )) as EnumeratorFactory.Signature["keepType"];

export default EnumeratorFactory_keepType;
