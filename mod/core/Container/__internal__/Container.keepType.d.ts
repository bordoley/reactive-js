import { Container } from "../../../core.js";
import { TypePredicate } from "../../../functions.js";
declare const Container_keepType: <C extends Container>(keep: <T>(predicate: import("../../../functions.js").Predicate<T>) => Container.Operator<C, T, T>) => <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => Container.Operator<C, TA, TB>;
export default Container_keepType;
