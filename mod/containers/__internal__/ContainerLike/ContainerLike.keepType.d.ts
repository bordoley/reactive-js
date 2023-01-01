import { ContainerLike, Keep, ContainerOperator } from "../../../containers.mjs";
import { TypePredicate } from "../../../functions.mjs";
declare const ContainerLike__keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export { ContainerLike__keepType as default };
