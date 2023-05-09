import { Container, ContainerTypeClass, Containers } from "../../containers.js";
import { TypePredicate } from "../../functions.js";
declare const Container_keepType: <C extends Container>(keep: <T>(predicate: import("../../functions.js").Predicate<T>) => Containers.Operator<C, T, T>) => <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => Containers.Operator<C, TA, TB>;
export default Container_keepType;
