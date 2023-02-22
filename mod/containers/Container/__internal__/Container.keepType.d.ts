import { ContainerLike, ContainerOperator, Keep } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";
declare const Container_keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C, never>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export default Container_keepType;
