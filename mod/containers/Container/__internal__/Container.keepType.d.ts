import { ContainerLike, Keep, ContainerOperator } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";
declare const Container_keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C, never>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export { Container_keepType as default };
