import { ContainerLike, Keep, ContainerOperator } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";
declare const ContainerLike__keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export { ContainerLike__keepType as default };
