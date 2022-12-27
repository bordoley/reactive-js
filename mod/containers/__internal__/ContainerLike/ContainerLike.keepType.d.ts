import { ContainerLike, Keep, ContainerOperator } from "../../../containers.mjs";
import { TypePredicate } from "../../../functions.mjs";
declare const keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export { keepType as default };
