import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { TypePredicate } from "../../functions.js";
declare const ReadonlyMap_keepType: <TA, TB extends TA, TKey extends {}>(predicate: TypePredicate<TA, TB>) => import("../../types.js").KeyedContainerOperator<ReadonlyMap.Type<unknown>, TKey, TA, TB>;
export default ReadonlyMap_keepType;
