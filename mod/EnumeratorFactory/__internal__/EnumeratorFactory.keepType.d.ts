import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
declare const Enumerator_keepType: <TA, TB extends TA>(predicate: import("../../functions.js").TypePredicate<TA, TB>) => import("../../types.js").ContainerOperator<EnumeratorFactory.EnumeratorFactoryContainer, TA, TB>;
export default Enumerator_keepType;
