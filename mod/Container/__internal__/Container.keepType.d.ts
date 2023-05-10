import { TypePredicate } from "../../functions.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";
declare const Container_keepType: <C extends Container>(keep: <T>(predicate: import("../../functions.js").Predicate<T>) => ContainerOperator<C, T, T>) => <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export default Container_keepType;
